import React from "react";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const {scrollYProgress}=useScroll();
  return (
    <div>
      <motion.div style={{backgroundColor:"darkgoldenrod",height:"7px",scaleX:scrollYProgress,left:0,bottom:0,right:0,position:'fixed',zIndex:1,transformOrigin:0}}></motion.div>
      <div className="d-flex border bordered">
        <motion.img drag dragConstraints={{left:"100vw",top:0,right:0,down:"100vw"}}
          src="https://logolook.net/wp-content/uploads/2021/08/One-Piece-Logo.png"
          style={{ width: "150px" }}
        />
        <ul
          className="d-flex justify-content-between align-items-center w-25"
          style={{ listStyleType: "none", textDecoration: "none" }}
        >
          <li className="text-secondary fw-bold">Luffy</li>
          <li className="text-secondary fw-bold">Our Team</li>
          <li className="text-secondary fw-bold">About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
