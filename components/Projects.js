import styled from "styled-components";
import { Heading, SubHeading } from "../styles/uielements";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "../projectData";

const Projects = () => {
  const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
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

    @media (max-width: 576px) {
      width: 100%;
    }
  `;

  const ProjectImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 300px;
    height: 100%;
    /* cursor: pointer; */
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
      color: #000;
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
        {projectData.map((item, index) => (
          <ProjectBlockContainer key={index}>
            <SubHeading>{item.name}</SubHeading>
            {/* <Link href={item.route} passHref> */}
            <ProjectImageContainer>
              <Image layout="intrinsic" src={item.img} alt="Picture of work" />
            </ProjectImageContainer>
            {/* </Link> */}
            <ButtonContainer>
              {item.showLink && (
                <Link href={item.live} passHref>
                  <a target="_blank">
                    <StyledButton>
                      {item.linkName ? item.linkName : "LIVE"}
                    </StyledButton>
                  </a>
                </Link>
              )}
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
