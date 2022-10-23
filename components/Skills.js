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
  SiRedux,
  SiStorybook,
  SiTestinglibrary,
  SiJest,
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
  text-align: center;

  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const SkillsRow = styled.div`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 40px;
  font-size: 4rem;
  color: var(--main);
  border: 8px solid var(--main);
  background-color: var(--yellow);
  padding: 40px;
  border-radius: 2px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 20px;
    font-size: 2.5rem;
    row-gap: 20px;
  }
`;

const skillsArr = [
  { icon: <SiReact />, skill: "React" },
  { icon: <SiTypescript />, skill: "TypeScript" },
  { icon: <SiJavascript />, skill: "JavaScript" },
  { icon: <SiRedux />, skill: "Redux" },
  { icon: <SiJest />, skill: "Jest" },
  { icon: <SiTestinglibrary />, skill: "Testing Library" },
  { icon: <SiStorybook />, skill: "Storybook" },
  { icon: <SiNodedotjs />, skill: "NodeJS" },
  { icon: <SiHtml5 />, skill: "HTML5" },
  { icon: <SiCss3 />, skill: "CSS3" },
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
