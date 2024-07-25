// src/components/Students.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const studentsData = {
  life: {
    extracurricularActivities: [
      "Music",
      "Dance",
      "Drama",
      "Art",
      "Sports",
      "Robotics",
      "Debate Club",
      "Science Club",
    ],
    clubsAndSocieties: [
      "Literary Society",
      "Environmental Club",
      "Astronomy Club",
      "Coding Club",
    ],
  },
  achievements: [
    {
      name: "John Smith",
      achievement: "National Level Math Olympiad Winner",
    },
    {
      name: "Sarah Lee",
      achievement: "Gold Medalist in State Swimming Championship",
    },
    {
      name: "Tech Innovators Club",
      achievement: "Winners of Inter-School Robotics Competition",
    },
  ],
  studentCouncil: [
    {
      position: "President",
      name: "Amy Parker",
      grade: "12",
    },
    {
      position: "Vice President",
      name: "Rajiv Mehta",
      grade: "11",
    },
    {
      position: "Secretary",
      name: "Lisa Wong",
      grade: "10",
    },
  ],
};

const Students = () => {
  return (
    <div className="container mt-5">
      {/* Students Header */}
      <div className="text-center mb-5">
        <h1>Student Life</h1>
        <p className="lead">Discover the vibrant and active life of our students.</p>
      </div>

      {/* Extracurricular Activities */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Extracurricular Activities</h2>
        <div className="card border-light shadow-lg rounded-3 hover-effect">
          <div className="card-header bg-light text-dark">
            Activities
          </div>
          <div className="card-body">
            <ul>
              {studentsData.life.extracurricularActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Clubs and Societies */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Clubs and Societies</h2>
        <div className="card border-light shadow-lg rounded-3 hover-effect">
          <div className="card-header bg-light text-dark">
            Clubs
          </div>
          <div className="card-body">
            <ul>
              {studentsData.life.clubsAndSocieties.map((club, index) => (
                <li key={index}>{club}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Achievements</h2>
        <div className="card border-light shadow-lg rounded-3 hover-effect">
          <div className="card-header bg-light text-dark">
            Notable Achievements
          </div>
          <div className="card-body">
            <ul>
              {studentsData.achievements.map((achievement, index) => (
                <li key={index}>
                  <strong>{achievement.name}</strong>: {achievement.achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Student Council */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Student Council</h2>
        <div className="card border-light shadow-lg rounded-3 hover-effect">
          <div className="card-header bg-light text-dark">
            Council Members
          </div>
          <div className="card-body">
            <ul>
              {studentsData.studentCouncil.map((member, index) => (
                <li key={index}>
                  <strong>{member.position}</strong>: {member.name} (Grade {member.grade})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
