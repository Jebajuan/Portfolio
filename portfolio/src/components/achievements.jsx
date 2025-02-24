import React from 'react';
import './CSS/achievement.css';

const Achievement = () => {
  return (
    <div className="achievement">
      <h2>ACHIEVEMENT</h2>
      <div className="achievement__container">
        <ul className="achievement__list">
          <li>
            <strong>Solved Problems:</strong>
            <ul>
              <li>LeetCode: 100+</li>
              <li>SkillRack: 1000+</li>
              <li>GeeksforGeeks: 100+</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;