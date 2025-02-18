import React from "react";
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="content">
      <div className="title">Welcome Everyone!!!</div>
      <p className="about-me">
        I'm Jay... 
        <br /> 
        You may know me as a geek who codes things for fun...
        <br />
        I have experience in various programming languages like Python, C, C++, Java, and JavaScript, which you can see in my projects.  
        I am also a team player who has proven my leadership skills in many group projects and hackathons.
        <br /> <br />
        Apart from coding I also like to play games, cook and listen to music... Even in your good day I might still beat you in Chess or League of Legends XD
        <br /> <br />
        I also like to help people and solve problems... Want to reach out to me with a doubt, problem, or an idea??? you can do so by navigating to contacts on the menubar on the left...
      </p>
    </div>
  );
};

export default Home;
