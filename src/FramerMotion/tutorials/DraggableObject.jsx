import React from 'react'
import { motion } from 'framer-motion'

const DraggableObject = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Draggble Objects</h1>
        <div className='d-flex justify-content-between'>
            <div>
                <h1 className='text-center'>No constraints</h1>
                <motion.div drag className='mx-auto' style={{width:"100px",height:'100px',backgroundColor:'blue'}}>

                </motion.div>
            </div>
            <div>
                <h1 className='text-center'>Drag Y constraints</h1>
                <motion.div drag='y' className='mx-auto' style={{width:"100px",height:'100px',backgroundColor:'blue'}}>

                </motion.div>
            </div>
            <div>
                <h1 className='text-center'>Drag constraints</h1>
                <motion.div drag dragConstraints={{left:0,right:0,top:0,bottom:0}} className='mx-auto' style={{width:"100px",height:'100px',backgroundColor:'blue'}}>

                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default DraggableObject