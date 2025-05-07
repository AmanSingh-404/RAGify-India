
import React from 'react';
import ChatContainer from '../components/chat/ChatContainer';

const ChatbotPage = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="border-b p-4">
        <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold">FluentChat Assistant</h1>
            <p className="text-muted-foreground">Ask anything or try the suggested topics</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-outline">
              New Chat
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <ChatContainer />
      </div>
    </div>
  );
};

export default ChatbotPage;
