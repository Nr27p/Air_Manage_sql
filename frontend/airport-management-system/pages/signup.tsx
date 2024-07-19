"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { text } from 'stream/consumers';

const SignUp = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password, phoneNumber }),
    });

    if (response.ok) {
      router.push('/'); // Redirect to a welcome page after successful signup
    } else {
      console.error('Failed to sign up');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={{color:"black"}}>
        <h2 style={styles.heading}>Sign Up</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  form: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center' as const,
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left' as const,
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SignUp;
