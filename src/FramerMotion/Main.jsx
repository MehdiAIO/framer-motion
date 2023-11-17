import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="container-fluid" style={{overflowX:'hidden'}}>
      <motion.div
        className="d-flex justify-content-between align-items-center"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.7 }}
        style={{ minHeight: "70vh", position: "relative" }}
      >
        <div>
          <motion.h1
            className="text-center"
            initial={{ opacity: 0.5, color: "red" }}
            animate={{
              opacity: 1,
              color: "darkgoldenrod",
              scale: 1.5,
              textShadow: "1px 1px 3px black",
            }}
            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          >
            JoyBoy
          </motion.h1>
          <motion.p
            className="text-center"
            animate={{ color: "darkgoldenrod" }}
            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            tenetur exercitationem doloribus dolor autem repudiandae ad odio?
            Quis cumque recusandae libero molestiae quod tempore natus non.
            Repellendus reiciendis fugit harum?
          </motion.p>
          <motion.div
            whileHover={{
              backgroundColor: "darkgoldenrod",
              // scale: 1,
              border: "none",
            }}
            className="btn btn-outline-primary d-block mx-auto w-25"
          >
            Learn More
          </motion.div>
        </div>
        <img
          src="https://pnganime.com/web/image-thumbnails/82/121-lg.png"
          className="img-fluid"
          alt=""
        />
      </motion.div>
      <motion.div
        className="row my-5"
        initial={{ opacity: 0, scale: 1,x:500}}
        whileInView={{ opacity: 1, scale: 1,x:0 }}
        transition={{ duration: 0.6,ease:'easeIn' }}
        viewport={{once:'true'}}
      >
        <div className="col-7">
          <div
            className="bg-dark d-flex justify-content-between align-items-center px-3"
            style={{ height: "400px" }}
          >
            <div>
              <motion.h2
                // className="text-light"
                initial={{ color: "#fff" }}
                animate={{ color: "darkgoldenrod" }}
                transition={{ duration: "5", ease: "easeIn" }}
              >
                About Us
              </motion.h2>
              <p className="text-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat, tenetur exercitationem doloribus dolor autem
                repudiandae ad odio? Quis cumque recusandae libero molestiae
                quod tempore natus non. Repellendus reiciendis fugit harum?
              </p>
            </div>
            <motion.img
              whileTap={{ rotateY: 180 }}
              whileHover={{ cursor: "pointer" }}
              src="/zoro.png"
              width="200px"
              alt=""
            />
          </div>
        </div>
        <div className="col-5">
          <div
            className="bg-dark d-flex justify-content-between align-items-center px-3"
            style={{ height: "400px" }}
          >
            <div>
              <motion.h2
                // className="text-light"
                initial={{ color: "#fff" }}
                animate={{ color: "darkgoldenrod" }}
                transition={{ duration: "5", ease: "easeIn" }}
              >
                Our Team
              </motion.h2>
              <p className="text-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat, tenetur exercitationem doloribus dolor autem
                repudiandae ad odio? Quis cumque recusandae libero molestiae
                quod tempore natus non. Repellendus reiciendis fugit harum?
              </p>
            </div>
            <motion.img
              whileHover={{ cursor: "pointer" }}
              whileTap={{ y: "-10vw" }}
              /*animate={{x:["-70vw",'0vw',"-60vw",'0vw','-50vw','0vw','-70vw']}} transition={{repeat:'loop',duration:20,ease:"easeInOut"}}*/ src="/pngegg.png"
              width="200px"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
