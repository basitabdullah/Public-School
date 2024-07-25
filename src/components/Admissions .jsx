import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admissions = () => {
  return (
    <div className="container mt-5">
      {/* Admissions Header */}
      <div className="text-center mb-5">
        <h1>Admissions</h1>
        <p className="lead">Learn about our admission process and criteria.</p>
      </div>

      {/* Admission Process */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Admission Process</h2>
        <div className="card border-light">
          <div className="card-header bg-light text-dark">
            How to Apply
          </div>
          <div className="card-body">
            <p>
              Admission forms are available for download. Submit the completed form along with required documents at the school office. Ensure all fields are filled out accurately to avoid delays in processing.
            </p>
          </div>
        </div>
      </div>

      {/* Admission Criteria */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Admission Criteria</h2>
        <div className="card border-secondary">
          <div className="card-header bg-secondary text-white">
            Eligibility
          </div>
          <div className="card-body">
            <p>
              Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades. Ensure that you meet the age and academic requirements specified for the grade you are applying for.
            </p>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Important Dates</h2>
        <div className="card border-light">
          <div className="card-header bg-light text-dark">
            Key Dates
          </div>
          <div className="card-body">
            <ul>
              <li><strong>Admission Form Availability:</strong> March 1st</li>
              <li><strong>Last Date for Submission:</strong> March 31st</li>
              <li><strong>Entrance Test:</strong> April 15th</li>
              <li><strong>Announcement of Results:</strong> April 30th</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Download Admission Form */}
      <div className="text-center mb-5">
        <h2 className="mb-4">Download Admission Form</h2>
        <a href="/path-to-your-admission-form.pdf" className="btn btn-primary" download>
          Download Form
        </a>
      </div>
    </div>
  );
};

export default Admissions;
