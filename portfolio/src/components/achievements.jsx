import React from 'react';
import './CSS/achievement.css';

const Achievement = () => {
  return (
    <div className="achievement">
      <h2>ACHIEVEMENT</h2>
      <div className="achievement__container">
        <ul className="achievement__list">
          <li>
            <strong>Hack-A-Bot 2024</strong> 
            <p>Prize: 3rd <br />
Place: St. Joseph's Institute Of Technology, Chennai <br />
Description: Hackathon where we developed a Student Feedback Sentiment Analysis using UiPath</p>
          </li>
          <li>
            <strong>Solved Problems:</strong>
            <ul>
              <li>LeetCode: 100+</li>
              <li>SkillRack: 1000+</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;