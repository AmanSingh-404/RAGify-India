
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Mic } from 'lucide-react';

interface ChatInputProps {
  onSubmit: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit, disabled }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !disabled) {
      onSubmit(message.trim());
      setMessage('');
      
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-background border rounded-lg flex items-end gap-2 p-2"
    >
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        rows={1}
        placeholder="Type your message..."
        disabled={disabled}
        aria-label="Chat input"
        className="flex-1 resize-none bg-transparent border-0 focus:outline-none focus:ring-0 text-base py-2 px-3 max-h-32"
      />
      
      <button
        type="button"
        aria-label="Voice input"
        className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-full p-2"
      >
        <Mic size={20} />
      </button>
      
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        aria-label="Send message"
        className={`rounded-full p-2 transition-colors ${
          !message.trim() || disabled
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
