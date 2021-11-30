import styled from "styled-components";
import { Heading, ParagraphText, SubHeading } from "../styles/uielements";

const ExperienceContainer = styled.div`
  margin: 0px;
  height: 50vh;
  width: 100%;
  /* background-color: var(--orange); */
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ExperienceHeader = styled.div`
  /* display: flex; */
  align-items: baseline;
  /* width: 50%; */
`;
const Experience = () => {
  return (
    <ExperienceContainer>
      <Heading>Experience</Heading>

      <ExperienceHeader>
        <SubHeading>Chief Creative Officer - The January Group</SubHeading>
        <h3>March 2020 - Present</h3>
      </ExperienceHeader>
      {/* <ul>
        <li>
          Technical directed a live event series featuring nationally renowned
          guest speakers and musical performers.
        </li>
        <li>Oversaw development for television projects.</li>
        <li>
          Approved art layouts, copy, design, and illustrative work for
          publication.
        </li>
      </ul> */}
      <ExperienceHeader>
        <SubHeading>Motion / Graphic Designer - The January Group</SubHeading>
        <h3>June 2018 - March 2020</h3>
      </ExperienceHeader>
      <ExperienceHeader>
        <SubHeading>Marketing Specialist - Will Jordan Music, LLC</SubHeading>
        <h3>November 2019 - June 2021</h3>
      </ExperienceHeader>
      {/* <ExperienceHeader>
        <SubHeading>Launch Code (Student) June 2021 - November 2021</SubHeading>
      </ExperienceHeader>
      <ParagraphText>
        Utilized wide range of development tools, including Node, Angular and
        Spring Boot. Performed testing on user defined functions and triggers.
        Wrote clear and clean code for use in projects.
      </ParagraphText> */}
    </ExperienceContainer>
  );
};

export default Experience;
