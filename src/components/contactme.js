import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these placeholders with your EmailJS service details
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send('service_2y1rod6', 'template_rn3p3sa', templateParams, 'Rn1TbXyhf3gQJrmPx')
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage('Failed to send message.');
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 text-gray-900 p-6 md:p-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Contact Me</h2>
        <p className="text-lg mb-6 text-center">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
        {successMessage && (
          <p className="text-center mt-4 text-green-500">{successMessage}</p>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
