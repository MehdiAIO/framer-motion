import React from 'react'
import { animate, motion } from 'framer-motion'
const Footer = () => {
    const liVariante={
        animate:{
          x:'6px'
        }
      }
  return (
    <div>
        <div className="d-flex justify-content-center bg-light py-3">
            <ul className='mx-2' style={{ listStyleType: "none", textDecoration: "none" }}>
                <motion.li variants={liVariante} whileHover='animate' className='fw-bold text-secondary'>Features</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 1</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 2</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 3</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 4</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 5</motion.li>
            </ul>
            <ul className='mx-2' style={{ listStyleType: "none", textDecoration: "none" }}>
                <motion.li variants={liVariante} whileHover='animate' className='fw-bold text-secondary'>Features</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 1</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 2</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 3</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 4</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 5</motion.li>
            </ul>
            <ul className='mx-2' style={{ listStyleType: "none", textDecoration: "none" }}>
                <motion.li variants={liVariante} whileHover='animate' className='fw-bold text-secondary'>Features</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 1</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 2</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 3</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 4</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 5</motion.li>
            </ul>
            <ul className='mx-2' style={{ listStyleType: "none", textDecoration: "none" }}>
                <motion.li variants={liVariante} whileHover='animate' className='fw-bold text-secondary'>Features</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 1</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 2</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 3</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 4</motion.li>
                <motion.li variants={liVariante} whileHover='animate' className='fw-light text-secondary'>Option 5</motion.li>
            </ul>
        </div>
    </div>
  )
}

export default Footer