// src/components/Testimonial/Testimonial.js

import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'John Doe',
    title: 'AI Researcher',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    quote: 'Proviz School of AI provided me with the skills and confidence to pursue a career in AI. The instructors are incredibly knowledgeable!',
  },
  {
    name: 'Jane Smith',
    title: 'Data Scientist',
    image: 'https://via.placeholder.com/100',
    quote: 'An amazing learning environment with hands-on projects that helped me apply what I learned in real-world situations.',
  },
  {
    name: 'Mike Johnson',
    title: 'Machine Learning Engineer',
    image: 'https://via.placeholder.com/100',
    quote: 'I highly recommend Proviz School of AI. The curriculum is up-to-date, and the support from mentors has been exceptional.',
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Students Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={`${testimonial.name}'s picture`} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
