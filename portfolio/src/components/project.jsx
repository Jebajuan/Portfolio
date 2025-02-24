import React from 'react';
import './CSS/project.css';

const project = () => {
  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title">MY PROJECTS</h2>
        <div className="project__grid">
          <div className="project__card">
            <h3>TODO List</h3>
            <p>ToDo List: The MERN To-Do List is a full-stack web application that enables users to manage tasks efficiently with CRUD (Create, Read, Update, Delete) functionality. 
              Built with MongoDB, Express.js, React, and Node.js, it features a responsive UI, real-time task updates, and optional user authentication with JWT. 
              The backend handles API requests via Express, while the frontend offers a seamless user experience with React. 
              Tasks are stored persistently in MongoDB, making it a great project for learning full-stack development and RESTful API integration.  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default project;