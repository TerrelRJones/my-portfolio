import styled from "styled-components";
import { Heading } from "../styles/uielements";

import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const SkillsContainer = styled.div`
  width: 100%;
  margin-bottom: 200px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillText = styled.h5`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 1.6rem;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 4rem;
  color: var(--main);
  border: 8px solid var(--main);
  background-color: var(--yellow);
  padding: 10px;
  border-radius: 2px;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const iconSize = 40;

const skillsArr = [
  { icon: <SiReact size={iconSize} color="#000" />, skill: "React" },
  { icon: <SiTypescript size={iconSize} color="#000" />, skill: "TypeScript" },
  { icon: <SiJavascript size={iconSize} color="#000" />, skill: "JavaScript" },
  { icon: <SiGit size={iconSize} color="#000" />, skill: "Git" },
  { icon: <SiHtml5 size={iconSize} color="#000" />, skill: "HTML5" },
  { icon: <SiCss3 size={iconSize} color="#000" />, skill: "CSS3" },
  { icon: <SiNodedotjs size={iconSize} color="#000" />, skill: "NodeJS" },
];

const Skills = () => {
  return (
    <SkillsContainer>
      <Heading>Skills</Heading>
      <SkillsRow>
        {skillsArr.map(({ icon, skill }) => (
          <SkillDiv key={`key_${skill}`}>
            {icon}
            <SkillText>{skill}</SkillText>
          </SkillDiv>
        ))}
      </SkillsRow>
    </SkillsContainer>
  );
};

export default Skills;
