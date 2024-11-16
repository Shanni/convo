export interface WebhookPayload {
  id: string;
  created_at: string;
  finished_at: string;
  language: string;
  structured: {
    title: string;
    overview: string;
    emoji: string;
    category: string;
    action_items: Array<{
      description: string;
      completed: boolean;
      deleted: boolean;
    }>;
  };
  plugins_results: Array<{
    plugin_id: string;
    content: string;
  }>;
}

export interface ProcessedWebhookData {
  id: string;
  metadata: {
    created_at: Date;
    finished_at: Date;
    language: string;
  };
  content: {
    title: string;
    overview: string;
    emoji: string;
    category: string;
  };
  tasks: Array<{
    description: string;
    status: 'completed' | 'pending';
    isDeleted: boolean;
  }>;
  insights: Array<{
    pluginId: string;
    content: string;
  }>;
} 