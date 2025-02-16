import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const [form,setform] =useState({ name: '',email : '',message : ''})
  const  [isLoading,setLoading]=useState(false);
  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Diya",
        from_email: form.email,
        to_email: 'diyatshah789@gamil.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      setform({name: '', email: '', message: ''});
    }).catch((error) => {
 
      setLoading(false);
      console.log(error);
  })
  }
  return (
    <section className='relative flex lg:flex-row flex-col items-center max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Get in Touch
        </h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>Name
            <input type='text' name='name' className='input' placeholder='Diya' required value={form.name} onChange={handleChange}/>
          </label>
          <label className='text-black-500 font-semibold'>Email
            <input type='email' name='email' className='input' placeholder='diyatshah789@gmail.com' required value={form.email} onChange={handleChange}/>
          </label>
          <label className='text-black-500 font-semibold'>Your Message
            <textarea name='message' rows={4} className='textarea' placeholder='Let me know how I can help you!' required value={form.message} onChange={handleChange}/>
          </label>
          <button type='submit' className='btn' disabled={isLoading} >
           {isLoading? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts

