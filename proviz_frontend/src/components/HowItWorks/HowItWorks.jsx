import React from 'react';
import './HowItWorks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBookOpen, faLaptop, faCertificate } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faUserPlus,
    title: 'Register',
    description: 'Sign up and create an account to access our full range of AI courses and resources.'
  },
  {
    icon: faBookOpen,
    title: 'Choose a Course',
    description: 'Browse our curriculum and select the course that matches your skill level and goals.'
  },
  {
    icon: faLaptop,
    title: 'Learn and Practice',
    description: 'Engage with interactive lessons, hands-on projects, and expert guidance as you learn.'
  },
  {
    icon: faCertificate,
    title: 'Get Certified',
    description: 'Complete the course and earn a certificate to showcase your skills and knowledge in AI.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h1>How It Works</h1>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <FontAwesomeIcon icon={step.icon} className="step-icon" />
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
