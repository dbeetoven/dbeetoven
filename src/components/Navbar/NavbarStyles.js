import { Link } from 'gatsby';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 10%;
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(0px);
`;

export const StyledLogo = styled(Link)`
  margin-right: auto;
`;

export const NavbarItems = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  gap: 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0;
  }
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: var(--white);
    opacity: 1;
    cursor: pointer;
    border-bottom: 2px solid var(--yellow);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
