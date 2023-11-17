import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExitEnter = () => {
  const [show, setShow] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <AnimatePresence>
        {show && 
        <motion.div
        key='item'
        style={{
          marginTop:"10px",
          height:'100px',
          width:"100px",
          backgroundColor:'red'
        }}
        initial={{opacity:0,x:100}}
        animate={{ opacity: 1, x: 0 }}
        exit={{opacity:0,x:-100}}
        >

        </motion.div>
        }
        <motion.button transition={{
          layout:{
            duration:0.5,
            type:'spring'
          }
        }} layout onClick={()=>(setShow(!show))}>{show ? 'remove' : 'add'}</motion.button>
      </AnimatePresence>
    </div>
  );
};

export default ExitEnter;
