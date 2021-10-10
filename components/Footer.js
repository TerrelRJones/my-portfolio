import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--brown);
  color: var(--orange);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5px;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <h1>Copywright @2021 FSR</h1>
    </FooterStyled>
  );
};

export default Footer;
