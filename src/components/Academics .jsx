import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Academics = () => {
  return (
    <div className="container mt-5">
      {/* Academics Header */}
      <div className="text-center mb-5">
        <h1>Academics</h1>
        <p className="lead">Explore our curriculum and teaching methodologies.</p>
      </div>

      {/* Curriculum Overview */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Curriculum Overview</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              Primary (Grades 1-5)
            </div>
            <div className="card-body">
              <ul>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-success">
            <div className="card-header bg-success text-white">
              Secondary (Grades 6-10)
            </div>
            <div className="card-body">
              <ul>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-info">
            <div className="card-header bg-info text-white">
              Senior Secondary (Grades 11-12)
            </div>
            <div className="card-body">
              <h5>Science Stream</h5>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
              <h5>Commerce Stream</h5>
              <ul>
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Methodologies */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Teaching Methodologies</h2>
        <div className="card border-warning">
          <div className="card-header bg-warning text-white">
            Our Approach
          </div>
          <div className="card-body">
            <p>
              We use a blend of traditional and modern teaching techniques to cater to different learning styles. 
              Our educators employ interactive learning modules, digital classrooms, and access to online educational platforms to enhance the learning experience.
            </p>
          </div>
        </div>
      </div>

      {/* Educational Resources */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Educational Resources</h2>
        <div className="card border-secondary">
          <div className="card-header bg-secondary text-white">
            Available Resources
          </div>
          <div className="card-body">
            <ul>
              <li>Digital classrooms</li>
              <li>Interactive learning modules</li>
              <li>Access to online educational platforms</li>
              <li>Comprehensive library resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
