
import React from 'react';
import { Bot } from 'lucide-react';

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
  suggestions?: string[];
};

interface ChatMessageProps {
  message: MessageType;
  onSuggestionClick?: (suggestion: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onSuggestionClick }) => {
  const formattedTime = new Intl.DateTimeFormat('en-US', { 
    hour: 'numeric', 
    minute: 'numeric',
    hour12: true 
  }).format(message.timestamp);
  
  const renderContent = () => {
    if (message.isTyping) {
      return (
        <div className="flex gap-1 items-center">
          <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      );
    }
    
    // Replace URLs with clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = message.content.split(urlRegex);
    
    return (
      <div className="whitespace-pre-wrap">
        {parts.map((part, i) => {
          if (part.match(urlRegex)) {
            return (
              <a 
                key={i} 
                href={part} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                {part}
              </a>
            );
          }
          return part;
        })}
      </div>
    );
  };
  
  return (
    <div className="mb-4 animate-slide-up">
      <div className="flex items-start gap-2">
        {message.sender === 'bot' && (
          <div className="mt-1 bg-primary/10 rounded-full p-1 flex items-center justify-center">
            <Bot size={18} className="text-primary" aria-hidden="true" />
          </div>
        )}
        
        <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
          <div className={message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}>
            {renderContent()}
          </div>
          
          <div className="px-2 mt-1 text-xs text-muted-foreground">
            {formattedTime}
          </div>
          
          {message.suggestions && message.suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {message.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full hover:bg-secondary/80 transition-colors"
                  onClick={() => onSuggestionClick?.(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
