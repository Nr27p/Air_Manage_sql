// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <p style={styles.text}>© 2024 Airport Management. All rights reserved.</p>
        </div>
        <div style={styles.rightSection}>
          <a href="/contact" style={styles.link}>Contact Us</a>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#003366', // Dark blue color
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  text: {
    margin: '0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px',
  },
};

export default Footer;
