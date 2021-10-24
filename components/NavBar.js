import styled from "styled-components";
import Link from "next/link";
import * as FaIcon from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: w; */
  /* border-bottom: 8px solid var(--main); */
  width: 100%;
  color: black;
  height: 70px;
  margin: 0 auto;
  /* padding: 0 10px; */
  max-width: 1440px;
  font-size: 1.2rem;

  @media (max-width: 500px) {
    border: none;
  }
`;

const StyledLink = styled.a`
  padding: 0rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  transition: 0.2s ease-in-out;

  :hover {
    transform: translateY(-2px);
    color: var(--yellow);
    @media (max-width: 500px) {
      :hover {
        transform: translateX(2px);
      }
    }
  }
`;

const StyledNavLink = styled.div`
  display: flex;
  @media only screen and (max-width: 1440px) {
    flex-direction: column;
    display: none;
  }
`;

const StyledHamburger = styled.div`
  color: white;
  font-size: 40px;
  margin-right: 15px;

  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    display: none;
  }
`;

const NavBar = () => {
  return (
    <div className="bg">
      <Nav>
        <div>
          <Link href="/" passHref>
            <StyledLink>Terrel R Jones</StyledLink>
          </Link>
        </div>
        <StyledNavLink>
          <Link href="#work" passHref>
            <StyledLink>Work</StyledLink>
          </Link>
          <Link href="/about" passHref>
            <StyledLink>About</StyledLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledLink>Contact</StyledLink>
          </Link>
        </StyledNavLink>
        <StyledHamburger>
          <FaIcon.FaBars />
        </StyledHamburger>
      </Nav>
    </div>
  );
};

export default NavBar;
