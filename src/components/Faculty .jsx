import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const facultyMembers = [
  {
    name: "John Doe",
    position: "Principal",
    qualifications: "M.Ed",
    experience: "20 years",
    bio: "John has extensive experience in educational administration and a passion for fostering a supportive learning environment.",
    image: "https://plus.unsplash.com/premium_photo-1681248156480-78a1b2fdfb47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years",
    bio: "Jane brings a wealth of knowledge in physics and a commitment to academic excellence.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years",
    bio: "Emily is dedicated to enhancing students' language skills and promoting a love for literature.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years",
    bio: "Michael specializes in mathematics and encourages analytical thinking and problem-solving.",
    image: "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years",
    bio: "Sophia's expertise in science helps students explore and understand the natural world.",
    image: "https://images.unsplash.com/photo-1664575603992-0f17b771dd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years",
    bio: "David focuses on technology and coding, preparing students for the digital future.",
    image: "https://images.unsplash.com/photo-1679219349393-19188641a230?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
];

const Faculty = () => {
  return (
    <div className="container mt-5">
      {/* Faculty Header */}
      <div className="text-center mb-5">
        <h1>Our Faculty</h1>
        <p className="lead">Meet our dedicated team of educators.</p>
      </div>

      {/* Faculty Members */}
      <div className="row">
        {facultyMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-light">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.position}</h6>
                <p className="card-text">
                  <strong>Qualifications:</strong> {member.qualifications}<br />
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p className="card-text">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
