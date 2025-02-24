import React from 'react';
import './CSS/home.css';


 
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">Jebajuan Samuel</h1>
        <div className="home__perfil">
          <div className="home__social">
            <a href="https://www.instagram.com/almighty_sogeking/" target="_blank" rel="noopener noreferrer" className="home__social-link">
              
            </a>
            <a href="https://www.linkedin.com/in/jebajuan-samuel-a832b825b/" target="_blank" rel="noopener noreferrer" className="home__social-link">
              
            </a>
            <a href="https://github.com/Jebajuan" target="_blank" rel="noopener noreferrer" className="home__social-link">
              
            </a>
          </div>    
        </div>
      </div>
    </section>
  );
};

export default Home;