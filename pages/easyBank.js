import React from "react";
import { Heading } from "../styles/uielements";
import styled from "styled-components";
import Layout from "../components/Layout";

const easyBank = () => {
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
        <Heading>Easy Bank</Heading>
        <VideoBlock></VideoBlock>
      </ProjectContainer>
    </Layout>
  );
};

export default easyBank;
