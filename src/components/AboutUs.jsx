import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* About Us Header */}
      <div className="text-center mb-5">
        <h1>About Us</h1>
        <p className="lead">Learn more about our school's history, vision, and facilities.</p>
      </div>

      {/* History, Vision, and Mission */}
      <div className="row mb-5">
        <div className="col-md-4">
          <h2>Our History</h2>
          <p>
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. 
            Over the years, we have grown into a leading educational institution with a commitment to excellence and innovation.
          </p>
          <img src="https://images.unsplash.com/photo-1647853680065-1f0b955b871e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="History" className="img-fluid rounded" />
        </div>
        <div className="col-md-4">
          <h2>Our Vision</h2>
          <p>
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values. 
            We aim to inspire students to reach their full potential and become responsible global citizens.
          </p>
          <img src="https://plus.unsplash.com/premium_photo-1663040375205-c3bc4d7e982d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vision" className="img-fluid rounded" />
        </div>
        <div className="col-md-4">
          <h2>Our Mission</h2>
          <p>
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. 
            Our mission is to provide a well-rounded education that prepares students for future challenges and opportunities.
          </p>
          <img src="https://images.unsplash.com/photo-1700144068847-d2b8f5c07dae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mission" className="img-fluid rounded" />
        </div>
      </div>

      {/* Principal's Message */}
      <div className="text-center mb-5">
        <h2>Message from the Principal</h2>
        <blockquote className="blockquote">
          <p className="mb-0">
            "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. 
            Our dedicated staff and state-of-the-art facilities create an environment where students can excel academically and personally."
          </p>
        </blockquote>
      </div>

      {/* Infrastructure and Facilities */}
      <div className="mb-5">
        <h2>Infrastructure and Facilities</h2>
        <p>
          Our campus is equipped with modern facilities to support an enriching learning experience. These include:
        </p>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1704485754797-691cd515d529?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Infrastructure" className="img-fluid rounded" />
      </div>
    </div>
  );
};

export default AboutUs;
