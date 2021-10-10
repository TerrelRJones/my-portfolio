import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* margin: 0 auto; */
  height: 100%; // check from time to time

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-top: 4rem;
  }
`;
export const Heading = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.05rem;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  color: var(--brown);

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
    line-height: 50px;
  }
`;
export const SubHeading = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  /* text-transform: uppercase; */
  color: var(--brown);

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    text-align: center;
    line-height: 50px;
  }
`;

export const ParagraphText = styled.div`
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  max-width: 500px;
  color: var(--brown);

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
  }
`;

export const StyledLink = styled.a`
  color: var(--brown);
  font-size: 2rem;
  transition: 0.2s ease-in-out;

  :hover {
    transform: translateY(-2px);
    color: var(--orange);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;
