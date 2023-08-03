import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const events = [
    {
      title: "Bachelor's Degree",
      date: "2021 - 2025",
      description: "Pursuing Bachelor's in Sri Eshwar College of Engineering",
    },
    {
      title: "Higher Secondary Certificate",
      date: "2019 - 2021",
      description:
        "Completed 12th Grade in SKL Public Matric higher secondary school",
    },
    {
      title: "Secondary School Leaving Certificate",
      date: "2018 - 2019",
      description:
        "Completed 10th Grade in SKL Public Matric higher secondary school",
    },
  ];

  return (
    <div className="timeline">
      <div className="head">
        <i class="fa-solid fa-graduation-cap fa-2x"></i>
        <div className="education-title">Education</div>
      </div>
      <div className="education-box">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              {/* <h4>{event.date}</h4> */}
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
