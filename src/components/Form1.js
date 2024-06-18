/*import "../css/Form1.css";
import React from "react";

const Form1 = ({ onFormSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };
  return (
    <div className="form1-container">
      <form className="form1" onSubmit={handleSubmit}>
        <div className="form1-group">
          <label htmlFor="name">Your name</label>
          <input required name="name" id="name" type="name" />
        </div>
        <div className="form1-group">
          <label htmlFor="email">Your Email</label>
          <input required name="email" id="email" type="text" />
        </div>
        <div className="form1-group">
          <label htmlFor="subject">Subject</label>
          <input required name="Subject" id="Subject" type="text" />
        </div>
        <div className="form1-group">
          <label htmlFor="textarea">How Can I Help You?</label>
          <textarea
            required
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
          ></textarea>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form1;*/
import "../css/Form1.css";
import React, { useState } from "react";

const Form1 = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="form1-container">
      <form className="form1" onSubmit={handleSubmit}>
        <div className="form1-group">
          <label htmlFor="name">Your name</label>
          <input
            required
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form1-group">
          <label htmlFor="email">Your Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form1-group">
          <label htmlFor="subject">Subject</label>
          <input
            required
            name="subject"
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form1-group">
          <label htmlFor="message">How Can I Help You?</label>
          <textarea
            required
            cols="50"
            rows="10"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form1;
