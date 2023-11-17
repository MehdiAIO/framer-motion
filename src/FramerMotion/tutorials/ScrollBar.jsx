import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
        style={{scaleX:scrollYProgress,backgroundColor:'red',height:'7px',position:"fixed",left:0,top:0,right:0,transformOrigin:0}}
  ></motion.div>
  )
};

export default ScrollBar;
