import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Heading } from "../styles/uielements";

const googleHomepageClone = () => {
  const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    background-color: red;
  `;

  const VideoBlock = styled.div`
    height: 40%;
    width: 80%;
    background-color: black;
  `;
  return (
    <Layout>
      <ProjectContainer>
        <Heading>Google Hompage</Heading>
        <VideoBlock></VideoBlock>
      </ProjectContainer>
    </Layout>
  );
};

export default googleHomepageClone;
