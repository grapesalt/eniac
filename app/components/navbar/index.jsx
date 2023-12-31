import React, { useEffect } from "react";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar = ({ scrollPosition }) => {
  return (
    <>
      <DesktopNav scrollPosition={scrollPosition} />
      <MobileNav scrollPosition={1} />
    </>
  );
};

export default Navbar;
