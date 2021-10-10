import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const StyledLayout = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1440px;
  font-family: "Roboto", sans-serif;
`;

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </>
  );
};

export default Layout;
