import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles, Search, Shield, Zap, Gavel, Database, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted py-20 lg:py-32">
        <div className="container-narrow">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-slide-down">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Powered by advanced AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              The AI Assistant That <span className="text-primary">Understands You</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              FluentChat combines the power of large language models with retrieval-augmented generation
              for more accurate, contextual, and helpful responses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Link to="/chatbot" className="btn btn-primary btn-lg">
                Try FluentChat Now
              </Link>
              <Link to="/features" className="btn btn-outline btn-lg">
                Explore Features
              </Link>
            </div>
          </div>
          
          {/* Preview Image */}
          <div className="mt-16 md:mt-24 rounded-lg overflow-hidden shadow-xl border animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="bg-primary text-primary-foreground p-2 flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="text-sm font-medium">FluentChat</span>
            </div>
            <div className="bg-white p-6">
              {/* Chat mockup */}
              <div className="flex flex-col gap-4">
                <div className="chat-bubble-bot max-w-md">
                  Hello! How can I help you today?
                </div>
                <div className="chat-bubble-user max-w-md ml-auto">
                  Can you explain how RAG technology works in AI systems?
                </div>
                <div className="chat-bubble-bot max-w-md">
                  Sure! RAG (Retrieval-Augmented Generation) combines the power of large language models with information retrieval.
                  <br /><br />
                  Here's how it works:
                  <br /><br />
                  1. When you ask a question, the system searches a knowledge base for relevant information.<br />
                  2. The retrieved information is provided as context to the language model.<br />
                  3. The model then generates a response based on both its training and the retrieved information.
                  <br /><br />
                  This helps provide more accurate, up-to-date answers and reduces hallucinations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="bg-white py-16 lg:py-24 border-b">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              RAGify India: Legal AI Assistant
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between complex legal information and everyday citizens
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Gavel className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Knowledge Simplified</h3>
                  <p className="text-muted-foreground">
                    RAGify India democratizes access to legal information by interpreting complex laws and regulations into clear, actionable insights for everyone.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Powered by RAG Technology</h3>
                  <p className="text-muted-foreground">
                    Our Retrieval-Augmented Generation system combines the power of large language models with a curated database of Indian legal documents for accurate, contextual responses.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improving Access to Justice</h3>
                  <p className="text-muted-foreground">
                    By providing reliable legal information in an accessible format, we're helping citizens understand their rights and navigate the legal system with confidence.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/chatbot" className="btn btn-primary">
                  Try the Legal Assistant
                </Link>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <Card className="overflow-hidden border shadow-lg">
                <div className="bg-gradient-to-r from-primary/80 to-primary p-4 text-white">
                  <h3 className="font-semibold text-lg">RAGify India Project Overview</h3>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Target Users:</span>
                      <span className="text-muted-foreground">Citizens, Legal Practitioners, Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Technology:</span>
                      <span className="text-muted-foreground">AI + RAG + Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Coverage:</span>
                      <span className="text-muted-foreground">Constitutional, Civil, and Criminal Law</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm">
                      RAGify India combines cutting-edge AI with comprehensive legal databases to provide accurate, context-aware responses to legal queries in natural language. Our mission is to make legal knowledge accessible to all Indian citizens regardless of their background or expertise.
                    </p>
                  </div>

                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm italic">
                      "This project represents a significant step forward in using AI to improve access to justice and legal literacy across India."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="page-section">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose FluentChat?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI assistant combines powerful features to deliver an exceptional experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start p-6 bg-background border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Knowledge Retrieval</h3>
              <p className="text-muted-foreground mb-4">
                Access accurate information through our powerful retrieval system that pulls from trusted sources.
              </p>
              <Link to="/features" className="text-primary hover:underline mt-auto">
                Learn more →
              </Link>
            </div>
            
            <div className="flex flex-col items-start p-6 bg-background border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Conversation</h3>
              <p className="text-muted-foreground mb-4">
                Enjoy fluid, contextual conversations with an AI that remembers your chat history.
              </p>
              <Link to="/features" className="text-primary hover:underline mt-auto">
                Learn more →
              </Link>
            </div>
            
            <div className="flex flex-col items-start p-6 bg-background border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-muted-foreground mb-4">
                Your conversations are secured with end-to-end encryption and strict data policies.
              </p>
              <Link to="/features" className="text-primary hover:underline mt-auto">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-primary text-primary-foreground page-section">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to experience FluentChat?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Start chatting with our AI assistant today and discover how it can help you with research, writing, and more.
              </p>
              <Link to="/chatbot" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors">
                Try for Free
                <Zap size={18} />
              </Link>
            </div>
            
            <div className="bg-primary-foreground/10 p-6 rounded-lg border border-primary-foreground/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">FluentChat</h3>
                  <p className="text-sm text-primary-foreground/70">AI Assistant</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="chat-bubble bg-white text-foreground max-w-xs">
                  How can I get started with FluentChat?
                </div>
                <div className="chat-bubble bg-primary-foreground/10 max-w-xs">
                  Just click "Try for Free" and you'll be able to start chatting immediately. No sign-up required for the basic version!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
