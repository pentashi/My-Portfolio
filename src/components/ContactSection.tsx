import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    emailjs
      .sendForm(
        'service_eytztnv',
        'template_gipaxht',
        e.target as HTMLFormElement,
        'UVxiOGUEfnTk4xIN8'
      )
      .then(
        () => {
          setStatus('Message sent successfully.');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(''), 5000);
        },
        () => {
          setStatus('Message failed to send. Please try again later.');
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };

  return (
    <section id="contact" className="section-shell border-t border-white/8">
      <div className="content-grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="mb-5 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            If the work feels aligned, let’s talk.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-white/62">
            Reach out for full-time roles, consulting work, or conversations about backend systems, cloud architecture, and product engineering.
          </p>

          <div className="panel mt-8 p-6">
            <div className="mb-4 flex items-center gap-3 text-white/72">
              <Mail className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.22em]">Direct channels</span>
            </div>
            <p className="mb-5 text-base leading-7 text-white/64">
              Prefer a direct intro? You can also connect with me on GitHub, LinkedIn, or LeetCode.
            </p>
            <SocialLinks />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="panel space-y-5 p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/42" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-white/12 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/42" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-white/12 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/42" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the role, project, or problem you are working on."
              className="min-h-40 w-full border border-white/12 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              size="lg"
              className="rounded-none border border-white/15 bg-white px-6 text-xs uppercase tracking-[0.24em] text-black hover:bg-white/90"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>

            {status && <div className="text-sm text-white/70">{status}</div>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
