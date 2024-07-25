import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.header`
  background-color: #3e50b5;
  color: #ffffff;
  padding: 30px 45px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 665px) {
    flex-direction: column;
    padding: 30px 30px;
  }
`;

export const Logo = styled(Link)`
  align-self: start;
  color: inherit;
  text-decoration: none;
  font-size: 36px;
  font-weight: 600;
  z-index: 10;
`;

export const Navbar = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 20px;

  @media (max-width: 665px) {
    position: fixed;
    z-index: 0;
    top: ${(props) => (props.isOpen ? "0" : "-100vh")};
    left: 0;
    background-color: #3e50b5;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
    transition: 0.5s;
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  z-index: 5;
  color: inherit;
  text-decoration: none;

  font-size: 36px;
  font-weight: 300;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #ffffff;
  }

  &.active {
    &::before {
      height: 1px;
    }
  }

  &:hover {
    &::before {
      height: 2px;
    }
  }

  @media (max-width: 665px) {
    text-align: center;
    width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 665px) {
    display: block;
    z-index: 10;
    position: absolute;
    top: 30px;
    right: 10px;
  }
`;
