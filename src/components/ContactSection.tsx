import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>(''); // Track message send result

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(''); // Reset status before sending

    emailjs
      .sendForm(
        'service_eytztnv', // Your EmailJS service ID
        'template_gipaxht', // Your EmailJS template ID
        e.target as HTMLFormElement,
        'UVxiOGUEfnTk4xIN8' // Your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('Your message has been sent successfully!'); // Set success message
          setFormData({ name: '', email: '', message: '' }); // Clear the form after submission

          // Hide the status message after 5 seconds
          setTimeout(() => {
            setStatus('');
          }, 5000);
        },
        (error) => {
          console.log('Error sending email:', error.text);
          setStatus('Oops! Something went wrong. Please try again later.'); // Set error message

          // Hide the status message after 5 seconds
          setTimeout(() => {
            setStatus('');
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to collaborate or want to know more about my projects?
          I'm always open to discussing new opportunities and ideas.
        </p>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex justify-center mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-800 text-white w-80 placeholder-gray-400"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-800 text-white w-80 placeholder-gray-400"
            />
          </div>
          <div className="flex justify-center mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-800 text-white w-80 h-32 placeholder-gray-400"
            />
          </div>
          <Button type="submit" size="lg" className="bg-primary hover:bg-primary/80 cta-hover">
            Send Message
          </Button>
        </form>

        {/* Display status message here */}
        {status && (
          <div className="text-lg text-white mt-4">
            {status}
          </div>
        )}

        <div className="flex flex-col items-center mt-8">
          <h3 className="text-xl mb-4">Connect with me</h3>
          <div className="flex justify-center">
            {/* SocialLinks Component will go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
