import styled from "styled-components";
import {
  Container,
  Heading,
  ParagraphText,
  StyledLink,
} from "../styles/uielements";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/img/Terrel_headshot.jpeg";

import { SiTwitter, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";

const HeroContainer = styled.main`
  width: 100%;
  height: calc(100vh);
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 100%;
  padding-right: 15px;

  @media (max-width: 576px) {
    padding: 0;
    text-align: center;
  }
`;

const RightSide = styled.div`
  flex: 0.5;
  display: flex;
  width: 100%;
  justify-content: center;

  .img {
    border-radius: 2px;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    flex: 0.5;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  max-width: 1440px;
  width: 100%;

  h2 {
    font-size: 1.8rem;
    color: var(--main);
    font-family: "Archivo Black", sans-serif;
  }

  @media (max-width: 1024px) {
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
  width: 15rem;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 20px;
  background-color: var(--yellow);
  border: 8px solid var(--main);

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <LeftSide>
          <Heading>Terrel R Jones</Heading>
          <ParagraphText>
            Full Stack JavaScript Engineer with a focus on front end technology
            React. I have a strong interest in System Design, and Serverless
            technologies such as AWS, and Google Cloud. Professional strengths
            include creative thinking, and problem solving, clear verbal and
            written communication, and time management. I&#39;m ready to learn
            and contribute to team success.
          </ParagraphText>
        </LeftSide>
        <RightSide>
          <ImageContainer>
            <Image
              className="img"
              src={profilePic}
              alt="Picture of Terrel Jones; Front End Engineer"
              layout="intrinsic"
            />
          </ImageContainer>
        </RightSide>
      </Container>
      <BottomContainer>
        <LeftIconLinks>
          <Link href="https://instagram.com/fullstackrell" passHref>
            <StyledLink target="_blank">
              <SiInstagram size={30} />
            </StyledLink>
          </Link>

          <Link href="https://linkedin.com/in/terrelrjones" passHref>
            <StyledLink target="_blank">
              <SiLinkedin size={30} />
            </StyledLink>
          </Link>
          <Link href="https://twitter.com/fullstackrell" passHref>
            <StyledLink target="_blank">
              <SiTwitter size={30} />
            </StyledLink>
          </Link>

          <Link href="https://github.com/TerrelRJones" passHref>
            <StyledLink target="_blank">
              <SiGithub size={30} />
            </StyledLink>
          </Link>
        </LeftIconLinks>
      </BottomContainer>
    </HeroContainer>
  );
};

export default Hero;
