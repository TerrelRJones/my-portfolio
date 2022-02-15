import styled from "styled-components";
import { Heading, SubHeading } from "../styles/uielements";
import Image from "next/image";
import Link from "next/link";

import eCommerce from "../public/img/e-commerce.png";
import google from "../public/img/google-clone.png";
import easyBank from "../public/img/easy-bank.png";
import autoShine from "../public/img/autoshine2.png";

const Projects = () => {
  const eCode = "https://github.com/TerrelRJones/e-commerce";
  const eLive = "https://terrelrjones.github.io/e-commerce/";
  const gCode = "https://github.com/TerrelRJones/google-home-page-clone";
  const gLive = "https://terrelrjones.github.io/google-home-page-clone/";
  const eBankCode = "https://github.com/TerrelRJones/easy-bank";
  const eBankLive = "https://terrelrjones.github.io/easy-bank/";
  const autoShineLive = "https://expo.dev/@terrelrjones/autoshine-app";
  const autoShineCode = "https://github.com/TerrelRJones/auto-shine-app";

  const projects = [
    {
      name: "AUTOSHINE APP",
      img: autoShine,
      live: autoShineLive,
      code: autoShineCode,
      route: "/autoshine",
    },
    {
      name: "Prime",
      img: eCommerce,
      live: eLive,
      code: eCode,
      route: "/prime",
    },
    {
      name: "Google Homepage",
      img: google,
      live: gLive,
      code: gCode,
      route: "/googleHomepageClone",
    },
    {
      name: "Easy Bank",
      img: easyBank,
      live: eBankLive,
      code: eBankCode,
      route: "/easyBank",
    },
  ];

  const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 200px;

    /* background-color: var(--green); */
    @media only screen and (max-width: 1024px) {
      justify-content: center;
      margin-bottom: 50px;
    }
  `;

  const ProjectBlockContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
  `;

  const ProjectImageContainer = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    background-color: var(--yellow);
    border: 8px solid var(--main);
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledButton = styled.button`
    background-color: var(--main);
    color: white;
    font-family: "Anton", sans-serif;
    letter-spacing: 0.1rem;
    /* padding: 10px 15px; */
    width: 80px;
    height: 40px;
    border: none;
    margin: 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
      background-color: var(--yellow);
      transform: translate3d(-4px, -4px, 5px);
    }
  `;

  const StyledButtonTwo = styled.button`
    background-color: var(--white);
    color: var(--main);
    border: 4px solid var(--main);
    font-family: "Archivo Black", sans-serif;
    letter-spacing: 0.1rem;
    /* padding: 10px 15px; */
    width: 80px;
    height: 40px;
    margin: 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
      background-color: var(--yellow);
      transform: translate3d(-4px, -4px, 5px);
    }
  `;

  return (
    <>
      <Heading id="work">Projects</Heading>
      <ProjectContainer>
        {projects.map((item, index) => (
          <ProjectBlockContainer key={index}>
            <SubHeading>{item.name}</SubHeading>
            {/* <Link href={item.route} passHref> */}
            <ProjectImageContainer>
              <Image src={item.img} alt="Picture of work" />
            </ProjectImageContainer>
            {/* </Link> */}
            <ButtonContainer>
              <Link href={item.live} passHref>
                <a target="_blank">
                  <StyledButton>SITE</StyledButton>
                </a>
              </Link>
              <Link href={item.code} passHref>
                <a target="_blank">
                  <StyledButtonTwo>CODE</StyledButtonTwo>
                </a>
              </Link>
            </ButtonContainer>
          </ProjectBlockContainer>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
