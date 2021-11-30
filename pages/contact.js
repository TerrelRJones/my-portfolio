import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Archivo Black", sans-serif;
  height: 100vh;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  background-color: var(--yellow);
  border: 8px solid var(--main);
  width: 40vw;
  height: 60vh;
  flex-direction: column;
  padding: 2rem;
  /* justify-content: space-between; */
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
`;
const TextAreaContainer = styled.div`
  height: 18rem;
  /* background-color: red; */
  @media only screen and (max-width: 1024px) {
    height: 10rem;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  height: 35px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: var(--main);
  color: white;
`;

const contact = () => {
  return (
    <Layout>
      <FormContainer>
        <h1>CONTACT ME</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(email);
          }}
        >
          <InputContainer>
            <label>Email</label>
            <Input />
          </InputContainer>
          <InputContainer>
            <label>Subject</label>
            <Input />
          </InputContainer>
          <InputContainer>
            <TextAreaContainer>
              <TextArea />
            </TextAreaContainer>
          </InputContainer>
          <Button>SEND</Button>
        </Form>
      </FormContainer>
    </Layout>
  );
};

export default contact;
