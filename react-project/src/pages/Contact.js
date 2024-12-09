import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, updateMessage, deleteMessage } from "../store";

const Contact = () => {
  const messages = useSelector((state) => state.messages.messages); 
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ id: "", name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required.");
      return;
    }

    if (formData.id) {
      dispatch(updateMessage(formData));
    } else {
      dispatch(addMessage({ ...formData, id: Date.now().toString() }));
    }

    setFormData({ id: "", name: "", email: "", message: "" });
  };

  const handleDelete = (id) => {
    dispatch(deleteMessage(id));
  };

  const handleEdit = (msg) => {
    setFormData(msg); 
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      {/* Form for creating/editing messages */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{formData.id ? "Update Message" : "Add Message"}</button>
      </form>

      {/* Display list of messages */}
      <h3>Message List</h3>
      {messages.length > 0 ? (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              <strong>{msg.name}:</strong> {msg.message} <br />
              <span>{msg.email}</span>
              <br />
              <button onClick={() => handleEdit(msg)}>Edit</button>
              <button onClick={() => handleDelete(msg.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default Contact;
