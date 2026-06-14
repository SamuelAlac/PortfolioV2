import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    const loadingToast = toast.loading('Sending message...');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        { publicKey: PUBLIC_KEY }
      );

      form.current.reset();
      toast.update(loadingToast, {
        render: 'Message sent successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
    } catch (error) {
      toast.update(loadingToast, {
        render: "Failed to send message.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='bg-white/5 rounded-sm w-full lg:h-130 md:w-100 lg:w-150 
      flex flex-col p-3 lg:px-3 space-y-4 justify-center lg:justify-start' data-aos='fade-left' aria-label='Contact form'>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor="user_name" className='text-sm lg:text-xl'>Name</label>
        <input type="text" name='user_name' 
          id='user_name'
          autoComplete='name'
          required
          className='bg-white/5 h-10 rounded-sm p-2'
          placeholder='John Doe'
        />
      </div>

      <div className='flex flex-col gap-y-1'>
        <label htmlFor="user_email" className='text-sm lg:text-xl'>Email Address</label>
        <input type="email" name="user_email"
          id='user_email'
          autoComplete='email'
          required
          className='bg-white/5 h-10 rounded-sm p-2'
          placeholder='youremail@example.com'
        />
      </div>

      <div className='flex flex-col gap-y-1'>
        <label htmlFor="message" className='text-sm lg:text-xl'>Message</label>
        <textarea name="message"
          id='message'
          required
          className='bg-white/5 h-50 rounded-sm p-2'
          placeholder='Tell me about your projects or ideas'
        />
      </div>
      <button type="submit" disabled={loading} className="bg-[#CBACF9]/80 h-10 rounded-md disabled:opacity-50">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm