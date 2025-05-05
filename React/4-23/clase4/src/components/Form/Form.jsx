import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Expresion Regular
  const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valido Campos completos
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') 
      {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete fields',
        text: 'Please, fill out all fields',
      });
      return;
    }

    // Validar formato de email
    if (!isEmailValid(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email not valid',
        text: 'Enter valid email address.',
      });
      return;
    }

    // Si todo está OK y no hay ningun return
    Swal.fire({
      icon: 'success',
      title: 'Form sent succesfully',
      text: `Thanks, ${name}. We will reach soon.`,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Contact Form</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          rows="4"
          style={{ width: '100%', padding: '8px' }}
        ></textarea>
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>
        Send
      </button>
    </form>
  );
}

export default Form;