import styled from "styled-components";
import { Heading } from "../styles/uielements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faGit,
  faJava,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const SkillsContainer = styled.div`
  width: 100%;
  margin-bottom: 200px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 4rem;
  color: var(--main);
  border: 8px solid var(--main);
  background-color: var(--yellow);
  padding: 1.4rem;
  border-radius: 2px;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <Heading>Skills</Heading>
      <SkillsRow>
        <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
      </SkillsRow>
    </SkillsContainer>
  );
};

export default Skills;
