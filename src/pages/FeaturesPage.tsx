
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  Clock, 
  Cloud, 
  Shield, 
  Zap,
  Database
} from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start p-6 bg-background border rounded-lg hover:shadow-md transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              Explore the capabilities of FluentChat that make it an essential AI assistant for your everyday tasks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Search} 
              title="Knowledge Retrieval" 
              description="Access accurate information through our powerful retrieval system that pulls from trusted sources."
            />
            <FeatureCard 
              icon={BookOpen} 
              title="Research Assistant" 
              description="Get help with research projects by having FluentChat find and synthesize information."
            />
            <FeatureCard 
              icon={Code} 
              title="Code Assistance" 
              description="Receive help with programming, including code explanations and troubleshooting."
            />
            <FeatureCard 
              icon={FileText} 
              title="Content Creation" 
              description="Draft emails, articles, and other content with AI assistance that matches your style."
            />
            <FeatureCard 
              icon={MessageCircle} 
              title="Natural Conversation" 
              description="Enjoy fluid dialogues with an AI that remembers context and provides coherent responses."
            />
            <FeatureCard 
              icon={Clock} 
              title="Save Time" 
              description="Accomplish tasks more efficiently with an assistant that's always available to help."
            />
          </div>
        </div>
      </section>
      
      {/* Technical Features */}
      <section className="page-section">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Under the hood, FluentChat combines advanced technologies to deliver exceptional performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Database size={24} className="text-primary" />
                RAG Architecture
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Knowledge Indexing</h4>
                  <p className="text-muted-foreground">
                    Documents are processed, chunked, and embedded using state-of-the-art transformer models.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Vector Search</h4>
                  <p className="text-muted-foreground">
                    When you ask a question, our system finds the most relevant information from the knowledge base.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Context Enhancement</h4>
                  <p className="text-muted-foreground">
                    The retrieved information is used to augment the AI's knowledge, enabling more accurate responses.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Response Generation</h4>
                  <p className="text-muted-foreground">
                    The AI generates helpful, contextually aware answers based on both its training and the retrieved information.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent"></div>
                <div className="h-full w-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\") "}}>
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Cloud size={24} className="text-primary" />
                  API and Integration
                </h3>
                
                <div className="bg-background border rounded-md p-4 mb-4 font-mono text-sm">
                  <div className="text-muted-foreground">// Example API request</div>
                  <div className="mt-2">
                    <span className="text-blue-600">POST</span> /api/chat
                  </div>
                  <div className="mt-2">
                    {`{
  "message": "How does RAG work?",
  "history": [
    {"role": "user", "content": "Tell me about AI"},
    {"role": "assistant", "content": "AI is..."}
  ],
  "options": {
    "retrieval": true,
    "temperature": 0.7
  }
}`}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <p><span className="font-semibold">REST API</span> - Connect your applications using our simple REST endpoints.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <p><span className="font-semibold">SDK Support</span> - Official libraries for Python, JavaScript, and more.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <p><span className="font-semibold">Webhooks</span> - Set up notifications and triggers for async operations.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience FluentChat Today
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Start exploring the capabilities of our AI assistant and discover how it can transform your workflow.
          </p>
          <Link to="/chatbot" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors">
            Try FluentChat
            <Zap size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
