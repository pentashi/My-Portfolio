
import React from 'react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to collaborate or want to know more about my projects?
          I'm always open to discussing new opportunities and ideas.
        </p>
        
        <div className="flex justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/80 cta-hover">
            Send Me a Message
          </Button>
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl mb-4">Connect with me</h3>
          <div className="flex justify-center">
            <SocialLinks size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
