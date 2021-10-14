import React from "react";
import author from "../me.jpg";



const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
           
          </div>
         
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="abt-text">
          Hello! I am Shenal. 
          Known as a Hardworking and Dedicated individual, relied upon by all colleagues, 
          lecturers and co-workers and employers alike.
            
          Full of creative and innovative ideas with the patience and love to experiment on new strategies with a view of enhancing efficiency and performance.
            
          
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
