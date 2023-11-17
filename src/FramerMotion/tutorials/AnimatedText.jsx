import React from 'react'

import { motion } from 'framer-motion'

const AnimatedText = () => {
  return (
    <motion.h1
    initial={{x:-100}}
    animate={{x:0}}
    >animatedText
    </motion.h1>
  )
}

export default AnimatedText