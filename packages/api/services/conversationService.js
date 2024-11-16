const fs = require('fs/promises');
const path = require('path');

class ConversationService {
  constructor() {
    this.filePath = path.join(__dirname, '../../data/conversations.json');
  }

  async appendConversation(conversation) {
    try {
      // Read existing content
      let conversations = [];
      try {
        const data = await fs.readFile(this.filePath, 'utf-8');
        conversations = JSON.parse(data);
      } catch {
        // If file doesn't exist or is empty, start with empty array
        conversations = [];
      }
      console.log('New conversation appended:', conversation);
      // Append new conversation
      conversations.push(conversation);
      // Write back to file
      await fs.writeFile(this.filePath, JSON.stringify(conversations, null, 2));
    } catch (error) {
      console.error('Error appending conversation:', error);
      throw error;
    }
  }
}

const conversationService = new ConversationService();
module.exports = { conversationService };