import React, { useState } from 'react';
import './ApplicationForm.css';


const ApplicationForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    statement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-overlay">
      <form className="application-form" onSubmit={handleSubmit}>
        <h2>Apply Now</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Brief Statement:</label>
        <textarea name="statement" value={formData.statement} onChange={handleChange} required />
        
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
