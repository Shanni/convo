'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { ProcessedWebhookData } from '../../../../api/types';
import conversationsData from '../../../../data/conversations.json';

export default function ConversationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [conversation, setConversation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      // Find the conversation in the JSON data
      const foundConversation = conversationsData.find(
        (convo: any) => convo.id === params.id
      );
      
      setConversation(foundConversation);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) return <div className="p-4">Loading conversation...</div>;
  if (!conversation) return <div className="p-4">Conversation not found</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-base-300 rounded-lg hover:bg-base-200 transition-colors"
      >
        ← Back
      </button>

      <div className="bg-base-200 rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            {conversation.content.emoji} {conversation.content.title}
          </h1>
          <div className="flex gap-4 text-sm opacity-70">
            <span>Created: {new Date(conversation.metadata.created_at).toLocaleString()}</span>
            <span>Language: {conversation.metadata.language}</span>
            <span>Category: {conversation.content.category}</span>
          <span>Length: {Math.ceil((new Date(conversation.metadata.finished_at).getTime() - new Date(conversation.metadata.created_at).getTime()) / 60000)} minutes</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="leading-relaxed">{conversation.content.overview}</p>
        </div>

        {conversation.tasks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Action Items</h2>
            <ul className="space-y-2">
              {conversation.tasks.map((task: any, index: number) => (
                <li 
                  key={index}
                  className={`flex items-center gap-2 ${
                    task.status === 'completed' ? 'line-through opacity-50' : ''
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={task.status === 'completed'}
                    readOnly
                    className="checkbox checkbox-sm"
                  />
                  {task.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {conversation.insights.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">AI Insights</h2>
            <div className="space-y-4">
              {conversation.insights.map((insight: any, index: number) => (
                <div key={index} className="bg-base-300 p-4 rounded-lg">
                  <p className="text-sm opacity-70 mb-2">Plugin: {insight.pluginId}</p>
                  <p className="whitespace-pre-wrap">{insight.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 