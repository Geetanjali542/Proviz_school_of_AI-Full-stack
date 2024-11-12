import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Introduction from './components/Introduction/Introduction.jsx';
import ApplyButton from './components/ApplyButton/ApplyButton.jsx';
import ApplicationForm from './components/ApplicationForm/ApplicationForm.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx'; //some problem
import CoursesOverview from './components/CoursesOverview/CoursesOverview.jsx';
import KeyFeatures from './components/KeyFeatures/KeyFeatures.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import Footer from './components/Footer/Footer.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';

import './App.css';
import './animations.css';

const App = () => {
  const [isFormOpen, setFormOpen] = useState(false); // Handles manual "Apply" button click
  const [showForm, setShowForm] = useState(false); // Automatically opens form after 2 seconds

  const handleFormOpen = () => setFormOpen(true);
  const handleFormClose = () => {
    setFormOpen(false);
    setShowForm(false); // Closes both manual and automatic forms
  };

  // Opens form automatically after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/api/applicants/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Application submitted successfully!');
        handleFormClose(); // Close form after successful submission
      }
    } catch (error) {
      alert('There was an error submitting your application.');
    }
  };

  return (
    <div className="App">
      <Header />
      <Introduction />
      <ApplyButton onClick={handleFormOpen} />
      {(isFormOpen || showForm) && (
        <ApplicationForm onClose={handleFormClose} onSubmit={handleFormSubmit} />
      )}
      <CoursesOverview />
      <KeyFeatures />
      <HowItWorks />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
