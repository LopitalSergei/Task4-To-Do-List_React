/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { BurgerMenu, Container, Logo, Navbar, NavigationLink } from "./styled";
import { Squash as Hamburger } from "hamburger-react";

export function Header() {
  const navLinks = [
    {
      page: "Home",
      href: "/",
    },
    {
      page: "Settings",
      href: "/settings",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Logo to="/">Modsen Todo list</Logo>
      <BurgerMenu>
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      </BurgerMenu>
      <Navbar isOpen={isOpen}>
        {navLinks.map((link) => (
          <NavigationLink key={link.page} to={link.href}>
            {link.page}
          </NavigationLink>
        ))}
      </Navbar>
    </Container>
  );
}
