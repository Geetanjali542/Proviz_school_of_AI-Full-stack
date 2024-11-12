import React from 'react';
import './CoursesOverview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDatabase, faRobot, faChartLine } from '@fortawesome/free-solid-svg-icons';

const courseHighlights = [
  {
    icon: faBrain,
    title: 'Machine Learning',
    description: 'Master the fundamentals of machine learning, algorithms, and model building.'
  },
  {
    icon: faDatabase,
    title: 'Data Science',
    description: 'Learn how to gather, clean, and analyze data for impactful AI projects.'
  },
  {
    icon: faRobot,
    title: 'Deep Learning',
    description: 'Delve into neural networks, computer vision, and natural language processing.'
  },
  {
    icon: faChartLine,
    title: 'AI Strategy',
    description: 'Understand AI’s business implications and how to implement AI-driven strategies.'
  }
];

const CoursesOverview = () => {
  return (
    <section className="courses-overview-section">
      <div className="intro-text">
        <h1>Courses Designed for the Future</h1>
        <h2>Explore Our AI Curriculum</h2>
        <p>
          Our curriculum is tailored to equip you with the skills needed for a successful career in AI.
          With programs spanning from beginner to advanced levels, our hands-on courses are designed to meet industry demands through real-world project-based learning.
        </p>
      </div>
      
      <div className="course-highlights">
        {courseHighlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <FontAwesomeIcon icon={highlight.icon} className="highlight-icon" />
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesOverview;
