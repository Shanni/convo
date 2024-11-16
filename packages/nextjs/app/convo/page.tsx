"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { ProcessedWebhookData } from '../../../api/types';
import conversationsData from '../../../data/conversations.json';

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        // Simply set the conversations from the imported JSON
    setConversations(conversationsData);
    setLoading(false);
  }, []);

  if (loading) return <div className="p-4">Loading conversations...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Conversations</h1>
      <div className="grid gap-4">
        {conversations.map((convo) => (
          <Link 
            href={`/convo/${convo.id}`} 
            key={convo.id}
            className="block p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {convo.content.emoji} {convo.content.title}
                </h2>
                <p className="text-sm mb-3 opacity-70">
                  {new Date(convo.metadata.created_at).toLocaleDateString()}
                </p>
                <p className="line-clamp-2">{convo.content.overview}</p>
              </div>
              <span className="px-3 py-1 text-sm bg-base-300 rounded-full">
                {convo.content.category}
              </span>
            </div>
            
            {convo.tasks.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2">Action Items:</p>
                <ul className="list-disc list-inside">
                  {convo.tasks.slice(0, 2).map((task: any, index: number) => (
                    <li 
                      key={index} 
                      className={`text-sm ${task.status === 'completed' ? 'line-through opacity-50' : ''}`}
                    >
                      {task.description}
                    </li>
                  ))}
                  {convo.tasks.length > 2 && (
                    <li className="text-sm opacity-70">
                      +{convo.tasks.length - 2} more items...
                    </li>
                  )}
                </ul>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
