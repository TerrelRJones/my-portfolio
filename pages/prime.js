import React from "react";
import { Heading } from "../styles/uielements";
import Layout from "../components/Layout";
import styled from "styled-components";

const prime = () => {
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
        <Heading>Prime</Heading>
        <VideoBlock></VideoBlock>
      </ProjectContainer>
    </Layout>
  );
};

export default prime;
