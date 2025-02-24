import React from 'react';
import './CSS/home.css';


 
const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <h1 className="home__name">Jebajuan Samuel</h1>
        <h4>I am an enthusiastic Computer Science Engineering Student with a passion for coding and problem-solving.
           I am proficient with C and Java programming and flexible to learn new things. And have some experience with working in React</h4>
        <div className="home__perfil">
          <div className="home__social">
            <a href="https://www.instagram.com/almighty_sogeking/" target="_blank" rel="noopener noreferrer" className="home__social-link">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="social_icon"
            />
            </a>
            <a href="https://www.linkedin.com/in/jebajuan-samuel-a832b825b/" target="_blank" rel="noopener noreferrer" className="home__social-link">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="social_icon"
            />
            </a>
            <a href="https://github.com/Jebajuan" target="_blank" rel="noopener noreferrer" className="home__social-link">
            <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="social_icon"
            />
            </a>
          </div>    
        </div>
      </div>
    </section>
  );
};

export default Home;