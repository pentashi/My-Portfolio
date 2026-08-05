import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import emailjs from 'emailjs-com';
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_eytztnv',
        'template_gipaxht',
        e.target as HTMLFormElement,
        'UVxiOGUEfnTk4xIN8'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);

          setTimeout(() => {
            setStatus('');
          }, 5000);
        },
        (error) => {
          console.log('Error sending email:', error.text);
          setStatus('Oops! Something went wrong. Please try again later.');
          setIsSubmitting(false);

          setTimeout(() => {
            setStatus('');
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl">
            Ready to collaborate or want to know more about my projects?
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-300">brandon.egbe@example.com</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Dubai, UAE</p>
                  <p className="text-sm text-gray-500">Open to relocation</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Social</h3>
                  <div className="mt-2">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">Current Status</h3>
              <p className="text-gray-300">
                Actively looking for full-stack and backend engineering opportunities in Dubai and internationally.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-green-400">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-4 rounded-lg bg-secondary/50 border border-border text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full p-4 rounded-lg bg-secondary/50 border border-border text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full p-4 rounded-lg bg-secondary/50 border border-border text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 cta-hover shadow-lg shadow-primary/25"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {status && (
                  <div className={`text-center p-3 rounded-lg ${
                    status.includes('success') 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {status}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
