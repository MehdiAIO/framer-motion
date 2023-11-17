import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedCard = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "grey",
      }}
    >
      <motion.div
        style={{
          background: "#fff",
          padding: "5rem 3rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          layout: {
            duration: "0.5",
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <motion.h3>{!showCard && "Hover or Click"}</motion.h3>
        {showCard && (
          <motion.p
            style={{ width: "600px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto
            fugit, voluptatem qui voluptas inventore voluptatum? Reiciendis
            porro, eaque quisquam laudantium obcaecati hic sunt sapiente!
            Cupiditate rerum laudantium consequuntur minima.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
