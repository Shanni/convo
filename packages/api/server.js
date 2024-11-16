const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

// Middleware
app.use(morgan('dev')); // Logging
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Webhook endpoint
app.post('/webhook', (req, res) => {
  try {
    const webhookData = req.body;
    
    // Validate the required fields
    if (!webhookData.id || !webhookData.structured) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid webhook data format'
      });
    }

    // Extract relevant information
    const {
      id,
      created_at,
      finished_at,
      language,
      structured: {
        title,
        overview,
        emoji,
        category,
        action_items
      },
      plugins_results
    } = webhookData;

    // Process the data
    const processedData = {
      id,
      metadata: {
        created_at: new Date(created_at),
        finished_at: new Date(finished_at),
        language
      },
      content: {
        title,
        overview,
        emoji,
        category
      },
      tasks: action_items.map(item => ({
        description: item.description,
        status: item.completed ? 'completed' : 'pending',
        isDeleted: item.deleted
      })),
      insights: plugins_results?.map(plugin => ({
        pluginId: plugin.plugin_id,
        content: plugin.content
      })) || []
    };

    console.log('Processed webhook data:', processedData);
    
    // Here you can add additional logic like:
    // - Storing in database
    // - Triggering notifications
    // - Updating other services
    
    res.status(200).json({
      status: 'success',
      message: 'Webhook processed successfully',
      data: processedData
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error processing webhook',
      error: error.message
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