import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* margin-top: 0; */
  height: 80%; // check from time to time

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-top: 4rem;
    height: 80%;
  }
`;
export const Heading = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.05rem;
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  color: var(--main);

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
    line-height: 2rem;
  }
`;
export const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-family: "Archivo Black", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--main);

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    /* text-align: center; */
    line-height: 1.2rem;
  }
`;

// Paragraph Text
export const ParagraphText = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
  /* letter-spacing: 0.1rem; */
  font-family: "Archivo Black", sans-serif;
  font-weight: 700;
  max-width: 800px;
  color: var(--main);

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2rem;
    /* text-align: center; */
  }
`;

export const StyledLink = styled.a`
  color: var(--main);
  font-size: 2rem;
  transition: 0.2s ease-in-out;

  :hover {
    transform: translateY(-2px);
    color: var(--yellow);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;
