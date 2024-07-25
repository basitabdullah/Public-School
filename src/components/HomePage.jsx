import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Gallery'; 

const HomePage = () => {
  return (
    <div className="container mt-5">
      {/* Welcome Message */}
      <div className="text-center mb-5">
        <h1>Welcome to Springdale Public School</h1>
        <p className="lead">Where we nurture young minds for a brighter future.</p>
      </div>

      {/* Carousel/Banner Highlights */}
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src="https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Annual Sports Day" 
          />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src="https://images.unsplash.com/photo-1652620364162-4c0a3387a0f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Science Exhibition" 
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src="https://images.unsplash.com/photo-1636065991758-11065cbd50b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Cultural Fest" 
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Testimonials Section */}
      <section className="testimonials py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What Our Community Says</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="testimonial-box p-4 bg-white shadow-sm rounded">
                <p>"Springdale has been a great place for my children to grow and learn. The teachers are dedicated and the facilities are top-notch."</p>
                <footer className="blockquote-footer">Jane Doe, Parent</footer>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-box p-4 bg-white shadow-sm rounded">
                <p>"As an alumnus, I am grateful for the education and experiences I had at Springdale. The school prepared me well for the future."</p>
                <footer className="blockquote-footer">John Smith, Alumnus</footer>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-box p-4 bg-white shadow-sm rounded">
                <p>"The extracurricular activities at Springdale are excellent. My child has thrived in the music and sports programs."</p>
                <footer className="blockquote-footer">Emily Johnson, Parent</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="news-events py-5">
        <div className="container">
          <h2 className="text-center mb-4">News & Events</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="news-event-card p-4 bg-white shadow-sm rounded">
                <h3>Upcoming Science Fair</h3>
                <p>Join us for our annual Science Fair where students showcase their innovative projects and experiments.</p>
                <a href="/events" className="btn btn-primary">Learn More</a>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="news-event-card p-4 bg-white shadow-sm rounded">
                <h3>Parent-Teacher Conferences</h3>
                <p>Our parent-teacher conferences will be held next week. Please schedule an appointment to discuss your child's progress.</p>
                <a href="/events" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="featured-programs py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Featured Programs</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="featured-program-box p-4 bg-white shadow-sm rounded">
                <h3>STEM Program</h3>
                <p>Our STEM program provides students with a strong foundation in science, technology, engineering, and mathematics.</p>
                <a href="/academics" className="btn btn-primary">Learn More</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="featured-program-box p-4 bg-white shadow-sm rounded">
                <h3>Arts and Culture</h3>
                <p>Explore our vibrant arts and culture program, including music, dance, and drama classes.</p>
                <a href="/academics" className="btn btn-primary">Learn More</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="featured-program-box p-4 bg-white shadow-sm rounded">
                <h3>Sports and Fitness</h3>
                <p>Participate in a range of sports and fitness activities designed to promote health and teamwork.</p>
                <a href="/academics" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

    </div>
  );
};

export default HomePage;
