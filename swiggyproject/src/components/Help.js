import React from "react";
import "./Component.css";

export default function Help() {
  const faqueData = [
    {
      question: "How can I track my order?",
      answer: "You can track your order in the 'My Orders' section of the app."
    },
    {
      question: "I have a payment issue. What should I do?",
      answer: "Please contact our support team via the chat option in the Help section."
    },
    {
      question: "Can I cancel my order?",
      answer: "Order cancellation is allowed within 2 minutes after placing the order."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach out to our 24/7 customer support through the 'Help' section."
    }
  ];

  return (
    <div className="help-container ">
      <h1>Help & Support</h1>
      <p>Let's take a step ahead and help you better.</p>
      
      <div className="faq-section">
        {faqueData.map((faque, index) => (
          <div className="faq-item" key={index}>
            <h3>{faque.question}</h3>
            <p>{faque.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}