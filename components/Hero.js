import styled from "styled-components";
import {
  Container,
  Heading,
  ParagraphText,
  StyledLink,
} from "../styles/uielements";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/img/fsr_logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const HeroContainer = styled.main`
  /* position: relative; */
  width: 100%;
  height: 100vh;
  /* padding-top: 5rem; */

  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
`;

const RightSide = styled.div`
  flex: 1;

  /* background-color: black; */

  @media only screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 0;
    margin-bottom: 0;
    flex: 0.5;
    /* background-color: var(--yellow); */
  }
`;

const BottomContainer = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  max-width: 1440px;
  /* height: 50px; */
  width: 100%;
  /* padding: 0 1rem; */

  h2 {
    font-size: 1.8rem;
    color: var(--main);
    font-family: "Archivo Black", sans-serif;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 20px;
    flex-direction: column;
    margin-bottom: 10px;

    h2 {
      font-size: 1.5rem;
    }
    /* height: 200px; */
  }
`;

const LeftIconLinks = styled.div`
  display: flex;
  padding: 0 1rem;
  width: 20rem;
  justify-content: space-between;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <LeftSide>
          <Heading>Front End Engineer</Heading>
          <ParagraphText>
            Experienced bootcamp graduate with a background in various coding
            languages developing web apps. Specializing in JavaScript full
            stack. Professional strengths include creative thinking and problem
            solving, verbal and written communication, and time management. A
            very detail oriented mindset from 5+ years in the automotive
            transportation industry. I&#39;m ready to learn and contribute to
            team success.
          </ParagraphText>
        </LeftSide>
        <RightSide>
          <Image src={profilePic} alt="Picture of the Front End Engineer" />
        </RightSide>
      </Container>
      <BottomContainer>
        <LeftIconLinks>
          <Link href="https://instagram.com" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </StyledLink>
          </Link>
          <Link href="https://linkedin.com" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </StyledLink>
          </Link>
          <Link href="https://twitter.com/fullstackrell" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </StyledLink>
          </Link>
          <Link href="https://github.com/TerrelRJones" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </StyledLink>
          </Link>
        </LeftIconLinks>
        <div>
          <h2>info@fullstackrell.com</h2>
        </div>
      </BottomContainer>
    </HeroContainer>
  );
};

export default Hero;
