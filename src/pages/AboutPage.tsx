
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Users, BarChart, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container-narrow">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MessageCircle size={16} />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About FluentChat
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              We're on a mission to make AI assistants more accurate, helpful, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="page-section">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg">
                <p>
                  At FluentChat, we believe that artificial intelligence should be a tool that amplifies human potential, 
                  not replaces it. We're committed to developing AI systems that are accurate, trustworthy, and designed 
                  to help people access information and solve problems more effectively.
                </p>
                <p>
                  Our team combines expertise in machine learning, natural language processing, and human-computer 
                  interaction to create an AI assistant that truly understands user needs and provides helpful, 
                  contextually relevant responses.
                </p>
                <p>
                  What sets us apart is our commitment to research and transparency. We're constantly improving our 
                  retrieval-augmented generation techniques to ensure that our AI provides accurate information and 
                  cites its sources appropriately.
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-muted rounded-lg p-8 w-full">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2021</div>
                    <p className="text-muted-foreground">Founded</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <p className="text-muted-foreground">Team Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                    <p className="text-muted-foreground">Users</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-muted-foreground">Support</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold mb-2">Our Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Accuracy and trustworthiness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>User privacy and data security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Continuous learning and improvement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Inclusive and ethical AI development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="page-section bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings together experts in AI, product design, and engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Alex Morgan', 'Jamie Chen', 'Sam Taylor'].map((name, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-primary/10"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {index === 0 ? 'CEO & Co-founder' : index === 1 ? 'CTO & Co-founder' : 'Head of Research'}
                  </p>
                  <p className="text-sm">
                    {index === 0 
                      ? 'Previously led AI products at a Fortune 500 company with a focus on natural language technologies.'
                      : index === 1 
                        ? 'PhD in NLP with 10+ years of experience building large-scale language models and retrieval systems.'
                        : 'Expert in RAG architectures with publications at top AI conferences like NeurIPS and ICLR.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="page-section">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {[
                {
                  year: '2021',
                  title: 'Company Founded',
                  description: 'FluentChat started with a small team of 5 AI researchers and engineers.',
                  icon: Users
                },
                {
                  year: '2022',
                  title: 'First RAG Prototype',
                  description: 'Launched our first prototype combining LLMs with retrieval for more accurate responses.',
                  icon: BarChart
                },
                {
                  year: '2023',
                  title: 'Public Beta Release',
                  description: 'Opened our platform to beta users and reached 100,000 sign-ups in the first month.',
                  icon: Globe
                },
                {
                  year: '2024',
                  title: 'Official Launch',
                  description: 'Released FluentChat 1.0 with improved accuracy and expanded knowledge capabilities.',
                  icon: MessageCircle
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="text-primary font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground z-10">
                    <item.icon size={20} />
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience FluentChat for yourself and see how we're redefining AI assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot" className="btn bg-white text-primary hover:bg-white/90 btn-lg">
              Try FluentChat
            </Link>
            <Link to="/contact" className="btn bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 text-primary-foreground btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
