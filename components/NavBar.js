import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */
  color: black;
  height: 70px;
  margin: 0 auto;
  /* padding: 0 10px; */
  max-width: 1440px;
  font-size: 1.2rem;
`;

const StyledLink = styled.a`
  padding: 0rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--brown);
  font-weight: 700;
  transition: 0.2s ease-in-out;

  :hover {
    transform: translateY(-2px);
    color: var(--orange);
    @media (max-width: 500px) {
      :hover {
        transform: translateX(2px);
      }
    }
  }
`;

const StyledNavLink = styled.div`
  display: flex;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>full stack rell</StyledLink>
        </Link>
      </div>
      <StyledNavLink>
        <Link href="/work" passHref>
          <StyledLink>Work</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </StyledNavLink>
    </Nav>
  );
};

export default NavBar;
