import './css/about.css';


function About() {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <h4>I am an enthusiastic Data Analyst with a  foundation in Machine Learning.
         I have hands-on experience working with data using Excel and possess proficiency in C programming and Java for problem-solving 
         and software development. Additionally, I have expertise in Figma for UI/UX design and Canva for creative content creation.</h4>

      
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>2022-2026 (Current)</h3>
          <h4>B.Tech - Computer Science Engineering</h4>
          <h4>St. Joseph's Institute of Technology</h4>
          <h4>CGPA: 7.72</h4>
        </div>
        <div className="education-item">
          <h3>2022 - 12th </h3>
          <h4>Vidya Mandir Estancia</h4>
          <h4>Percentage: 62.2%</h4>
        </div>
        <div className="education-item">
          <h3>2020 - 10th </h3>
          <h4>AVidya Mandir Estancia</h4>
          <h4>Percentage: 65.0%</h4>
        </div>
      </div>
    </div>
  );
}

export default About;