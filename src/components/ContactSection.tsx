import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import SocialLinks from './SocialLinks';
import SectionHeading from './SectionHeading';

const WHATSAPP_NUMBER = '971542021940';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Brandon, I'm ${formData.name.trim()}.\n\n${formData.message.trim()}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Get in touch"
          description="Hiring for a full-stack or backend role, or want a walkthrough of one of these projects? Send me a message."
        />

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
                  <a href="mailto:mbongweegbe@gmail.com" className="text-gray-300 hover:text-cyan-300">mbongweegbe@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#25D366]/10">
                  <SiWhatsapp className="w-6 h-6 text-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-300">+971 54 202 1940</a>
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
              <h3 className="text-xl font-bold text-white mb-3">Availability</h3>
              <p className="text-gray-300">
                Looking for full-stack and backend engineering roles in Dubai, the wider UAE and remote.
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
                    placeholder="Your name"
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
                    placeholder="Tell me about the role or project..."
                    required
                    rows={5}
                    className="w-full p-4 rounded-lg bg-secondary/50 border border-border text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#25D366] text-[#0b1118] hover:bg-[#3ee07a] font-semibold">
                  <SiWhatsapp className="mr-2 h-5 w-5" aria-hidden="true" />
                  Send on WhatsApp
                </Button>
                <p className="text-center text-xs text-gray-500">Opens WhatsApp with your message ready to send.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
