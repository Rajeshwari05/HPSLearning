import React from "react";
import { useSelector } from "react-redux";

const Services = () => {
  
  const services = useSelector((state) => state.theme.services);
  
  return (
    <div className="services">
      <h2>Our Services</h2>
      {services.length > 0 ? (
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default Services;
