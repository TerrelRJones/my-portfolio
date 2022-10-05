import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledLayout = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1440px;
  font-family: "Roboto", sans-serif;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBar />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
