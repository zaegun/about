import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate} from "react-router-dom";

function Contact() {
  // Redirect Functions
  const navigate = useNavigate()

  function submit() {
    window.scrollTo(0, 0);
    navigate("/TY")
  }

  // EmailJS functions
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8weihgc', 'template_uco6jr6', form.current, 'rmPnLy8TIKNELTDW8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    submit();
    };

    return(
      <div className='w-5/6 mx-auto mb-10 lg:w-1/2'>
        <h1 className='head-fade opacity-0'>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="bg-zinc-900 rounded px-8 py-6 text-left sub-head-fade opacity-0">
          <h3 className="mb-6">Please fill out this form to contact me. Note that all sections are required for submission.</h3>
          <div className="mb-5">
            <label className="block font-bold mb-2">Name</label>
            <input type="text" name="user_name" className="appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-5"> 
            <label className="block font-bold mb-2">Email</label>
            <input type="email" name="user_email" className="appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-5">
            <label className="block font-bold mb-2">Message</label>
            <textarea name="message" className="appearance-none border rounded w-full h-full min-h-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <input type="submit" value="Send" className="w-full mt-6 px-6 py-2 text-lg font-semibold bg-emerald-500 text-white rounded-xl hover:bg-emerald-700"/>
        </form>
      </div>
    );
}

export default Contact;
