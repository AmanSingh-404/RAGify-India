
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { MessageType } from './ChatMessage';
import ChatInput from './ChatInput';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      content: "Hello! I'm FluentChat, your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: ['Tell me about FluentChat', 'What can you do?', 'How does RAG work?']
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Mock API response with typing effect
  const mockBotResponse = async (userMessage: string) => {
    setLoading(true);
    
    // Create a temporary "typing" message
    const typingMessageId = Date.now().toString();
    const typingMessage: MessageType = {
      id: typingMessageId,
      content: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    // Wait a realistic amount of time for the "AI" to process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a response based on the user's message
    let response = '';
    let suggestions = [];
    
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      response = "Hello! How can I assist you today?";
      suggestions = ["Tell me about RAG", "How do you work?", "What capabilities do you have?"];
    } else if (userMessage.toLowerCase().includes('rag')) {
      response = "Retrieval-Augmented Generation (RAG) is a technique that enhances large language models with external information. It retrieves relevant documents from a knowledge base and provides them as context to the model, enabling more accurate and informed responses.\n\nRAG helps reduce hallucinations and enables the model to access up-to-date information beyond its training data.";
      suggestions = ["Show me a RAG example", "How is RAG implemented?", "What are the benefits of RAG?"];
    } else if (userMessage.toLowerCase().includes('capabilities') || userMessage.toLowerCase().includes('what can you do')) {
      response = "I can help with a variety of tasks:\n\n• Answer questions and provide information\n• Assist with writing and content creation\n• Explain complex topics in simple terms\n• Generate ideas and brainstorm solutions\n• Help with research and information gathering\n• Draft emails and messages\n\nJust let me know what you need help with!";
      suggestions = ["Help me write an email", "Explain quantum computing", "Generate content ideas"];
    } else {
      response = "Thanks for your message! I'm currently running as a demo with limited capabilities. In a full implementation, I would connect to a backend API that could process your request, perform RAG to retrieve relevant information, and generate a helpful response. Is there anything specific about FluentChat you'd like to know?";
      suggestions = ["Tell me more about FluentChat", "How does the chat system work?", "What technologies are used?"];
    }
    
    // Remove the typing message and add the actual response
    setMessages(prev => prev.filter(msg => msg.id !== typingMessageId));
    
    // Add the real message with a slight delay to make the transition smoother
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          content: response,
          sender: 'bot',
          timestamp: new Date(),
          suggestions
        }
      ]);
      setLoading(false);
    }, 100);
  };
  
  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Generate bot response
    mockBotResponse(content);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pb-4 px-2 md:px-4">
        <div className="max-w-3xl mx-auto">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              onSuggestionClick={handleSuggestionClick}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="border-t bg-background py-4">
        <div className="max-w-3xl mx-auto px-2 md:px-4">
          <ChatInput onSubmit={handleSendMessage} disabled={loading} />
          <p className="text-xs text-center mt-2 text-muted-foreground">
            FluentChat may produce inaccurate information. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
