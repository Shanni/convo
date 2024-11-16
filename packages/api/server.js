const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { conversationService } = require('./services/conversationService');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Get all conversations
app.get('/conversations', async (req, res) => {
  try {
    const conversations = await conversationService.getAllConversations();
    res.json(conversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Get conversation by ID
app.get('/conversations/:id', async (req, res) => {
  try {
    const conversation = await conversationService.getConversationById(req.params.id);
    if (!conversation) {
      return res.status(404).json({ status: 'error', message: 'Conversation not found' });
    }
    res.json(conversation);
  } catch (error) {
    console.error('Error fetching conversation:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Webhook endpoint
app.post('/webhook', async (req, res) => {
  try {
    const webhookData = req.body;
    
    // Validate the required fields
    if (!webhookData.id || !webhookData.structured) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid webhook data format'
      });
    }

    // Process the data
    const processedData = {
      id: webhookData.id,
      metadata: {
        created_at: new Date(webhookData.created_at),
        finished_at: new Date(webhookData.finished_at),
        language: webhookData.language
      },
      content: {
        title: webhookData.structured.title,
        overview: webhookData.structured.overview,
        emoji: webhookData.structured.emoji,
        category: webhookData.structured.category
      },
      tasks: webhookData.structured.action_items.map(item => ({
        description: item.description,
        status: item.completed ? 'completed' : 'pending',
        isDeleted: item.deleted
      })),
      insights: webhookData.plugins_results?.map(plugin => ({
        pluginId: plugin.plugin_id,
        content: plugin.content
      })) || []
    };

    // Simply append to file
    await conversationService.appendConversation(processedData);
    
    res.status(200).json({
      status: 'success',
      message: 'Conversation saved successfully'
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error saving conversation'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something broke!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 