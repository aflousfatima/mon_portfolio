import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education"  className="education-section">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
          My studies took me through different cities and universities, each enriching my skills and shaping a versatile tech profile.
</p>
      <div className="timeline">
        <div className="timeline-item branch-right" data-index="1">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Master's in DevOps & Cloud Computing</h3>
            <p>
              <FaMapMarkerAlt className="location-icon" /> Abdelmalek Essaâdi University, Larache
              <br />
              <FaCalendarAlt className="date-icon" /> 2023 - 2025
            </p>
          </div>
        </div>
        <div className="timeline-item branch-left" data-index="2">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Bachelor's in Mathematics & Computer Science (SMI)</h3>
            <p>
              <FaMapMarkerAlt className="location-icon" /> Sultan Moulay Slimane University, Beni Mellal
              <br />
              <FaCalendarAlt className="date-icon" /> 2020 - 2023
            </p>
          </div>
        </div>
        <div className="timeline-item branch-right" data-index="3">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>High School Diploma in Mathematical Sciences A</h3>
            <p>
              <FaMapMarkerAlt className="location-icon" /> Demnate High School, Azilal
              <br />
              <FaCalendarAlt className="date-icon" /> 2019 - 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
