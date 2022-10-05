import styled from "styled-components";

const FooterStyled = styled.footer`
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5px;
  height: 50px;
  margin-top: auto;

  h1 {
    font-size: 1rem;
    color: var(--main);
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <h1>Copywright @2021 FSR</h1>
    </FooterStyled>
  );
};

export default Footer;
