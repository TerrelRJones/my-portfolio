import styled from "styled-components";
import { Heading, ParagraphText, SubHeading } from "../styles/uielements";

const ExperienceContainer = styled.div`
  margin: 0px;
  height: 50vh;
  /* background-color: black; */
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: baseline;
  /* width: 50%; */
`;
const Experience = () => {
  return (
    <ExperienceContainer>
      <Heading>Experience</Heading>

      <ExperienceHeader>
        <SubHeading>Launch Code (Student) June 2021 - November 2021</SubHeading>
      </ExperienceHeader>
      <div>
        <ParagraphText>
          Utilized wide range of development tools, including Node, Angular and
          Spring Boot. Performed testing on user defined functions and triggers.
          Wrote clear and clean code for use in projects.
        </ParagraphText>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
