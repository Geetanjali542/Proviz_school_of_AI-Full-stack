import React from 'react';
import './KeyFeatures.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faLaptopCode, faCertificate, faInfinity } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faChalkboardTeacher,
    title: 'Expert Instructors',
    description: 'Learn from industry-leading professionals with years of experience in AI and technology.'
  },
  {
    icon: faLaptopCode,
    title: 'Hands-On Projects',
    description: 'Gain practical experience by working on real-world projects to build a strong portfolio.'
  },
  {
    icon: faCertificate,
    title: 'Certification',
    description: 'Receive a recognized certificate upon course completion to enhance your resume.'
  },
  {
    icon: faInfinity,
    title: 'Lifetime Access to Materials',
    description: 'Enjoy lifetime access to course materials, allowing you to revisit and refresh your knowledge anytime.'
  }
];

const KeyFeatures = () => {
  return (
    <section className="key-features-section">
      <h1>Why Choose Us?</h1>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
