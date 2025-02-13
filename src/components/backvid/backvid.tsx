import React from "react";
import video from '../../assets/background.mp4'
import './backvid.css'

const Backvid: React.FC = () => {
  return (
    <div className="video-container">
        
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default Backvid;
