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
  margin-bottom: 5rem;
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 4rem;
  color: var(--light-brown);
  background-color: var(--brown);
  padding: 1.4rem;
  border-radius: 10px;

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
