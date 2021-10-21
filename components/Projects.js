import styled from "styled-components";
import { Heading, SubHeading } from "../styles/uielements";
import Image from "next/image";
import Link from "next/link";

import eCommerce from "../public/img/e-commerce.png";
import google from "../public/img/google-clone.png";
import easyBank from "../public/img/easy-bank.png";

const Projects = () => {
  const eCode = "https://github.com/TerrelRJones/e-commerce";
  const eLive = "https://terrelrjones.github.io/e-commerce/";
  const routeEcommerce = "/prime";
  const gCode = "https://github.com/TerrelRJones/google-home-page-clone";
  const gLive = "https://terrelrjones.github.io/google-home-page-clone/";
  const eBankCode = "https://github.com/TerrelRJones/easy-bank";
  const eBankLive = "https://terrelrjones.github.io/easy-bank/";

  const projects = [
    {
      key: 1,
      name: "Prime",
      img: eCommerce,
      live: eLive,
      code: eCode,
      route: routeEcommerce,
    },
    {
      key: 2,
      name: "Google Homepage",
      img: google,
      live: gLive,
      code: gCode,
    },
    {
      key: 3,
      name: "Easy Bank",
      img: easyBank,
      live: eBankLive,
      code: eBankCode,
    },
  ];

  const clicked = (i) => {
    console.log(`clicked ${i}`);
  };

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
      <Heading>Projects</Heading>
      <ProjectContainer>
        {projects.map((item) => (
          <ProjectBlockContainer key={item.key}>
            <SubHeading>{item.name}</SubHeading>
            <ProjectImageContainer onClick={() => clicked(item.route)}>
              <Image src={item.img} alt="Picture of the author" />
            </ProjectImageContainer>
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
