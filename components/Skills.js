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
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

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
  margin-top: 0.5rem;
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
        <SkillDiv>
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
          <SkillText>React</SkillText>
        </SkillDiv>

        <SkillDiv>
          <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
          <SkillText>JavaScript</SkillText>
        </SkillDiv>

        <SkillDiv>
          <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
          <SkillText>HTML5</SkillText>
        </SkillDiv>

        <SkillDiv>
          <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
          <SkillText>CSS3</SkillText>
        </SkillDiv>

        <SkillDiv>
          <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
          <SkillText>Node</SkillText>
        </SkillDiv>

        <SkillDiv>
          <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
          <SkillText>Java</SkillText>
        </SkillDiv>

        <SkillDiv>
          <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
          <SkillText>Git</SkillText>
        </SkillDiv>
      </SkillsRow>
    </SkillsContainer>
  );
};

export default Skills;
