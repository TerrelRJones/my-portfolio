import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  color: white;
  height: 70px;
  font-size: 1.2rem;

  @media (max-width: 500px) {
    border: none;
  }
`;

const StyledLink = styled.a`
  padding: 0rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-weight: 900;
  transition: 0.2s ease-in-out;

  &:hover {
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
    <Nav>
      <div>
        {/* <Link href="/" passHref> */}
        <StyledLink>TRJ</StyledLink>
        {/* </Link> */}
      </div>
      {/* <StyledNavLink>
        <Link href="#work" passHref>
          <StyledLink>Work</StyledLink>
        </Link>

        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </StyledNavLink> */}
      {/* <StyledHamburger>
          <FaIcon.FaBars />
        </StyledHamburger> */}
    </Nav>
  );
};

export default NavBar;
