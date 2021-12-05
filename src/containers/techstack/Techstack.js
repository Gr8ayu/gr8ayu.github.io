import React, {useContext} from "react";
import "./Techstack.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {skillSet} from "../../portfolio";


export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">

    <div>
    {
    skillSet.skills.map((skills, i) => {
      return (
              <div className="container">
              {/* <span>{skills.category}</span> */}
              {
                skills.skills.map((skill, i) => {
                  return (
                      <div  className={isDark ? "dark-mode-text chip experience-card-dark" : " chip experience-card" }>
                      <img src={skill.image} alt="skill" width="96" height="96"/>
                      <span>{skill.name}</span>
                      </div>
                  );
                })
              }
             </div> 
      );
    }

    )
    
  }
    </div>
</Fade>
 
  );
}
