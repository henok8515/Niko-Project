import React, { useState } from "react";
import { Container, Navs, Logo, List, Image } from "./style";
function Header() {
  const [nav, setNav] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Container className={nav ? "bg-gray-800" : "bg-transparent"}>
      <Logo>
        <Image />
        <List fontWeight={600} fontFamily={"cursive"} fontSize={35}>
          All Hands{" "}
        </List>
      </Logo>
      <Navs>
        <List>Home</List>
        <List>About US</List>
        <List>Projects</List>
        <List>Contact US</List>
      </Navs>
    </Container>
  );
}

export default Header;
