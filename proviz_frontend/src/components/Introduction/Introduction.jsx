import React, { useEffect } from 'react';
import './Introduction.css';

const Introduction = () => {

  // Function to handle form open
  const handleFormOpen = () => {
    console.log('Apply form opened automatically');
    // Add logic here to open the form pop-up
  };

  // Use useEffect to open the form after 2 seconds when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      handleFormOpen();
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return (
    <section id="introduction" className="introduction">
      <h2>Welcome to Proviz School of AI</h2>
      <p className="introone">Our mission is to empower students with AI skills for the future.</p>
      <p className="introtwo">Join us to become a part of the AI revolution.</p>
    </section>
  );
};

export default Introduction;
