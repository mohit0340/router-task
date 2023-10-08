import React from 'react'
import { motion } from "framer-motion"


const animation={
    initial:{ opacity:0,x:100},
    animate:{opacity:1,x:0},
    exit:{opacity:0,x:-100}
}

const Smoothroute = ({children}) => {
  return (
    <motion.div variants={animation} initial="initial" animate="animate" exit="exit" transition={{durestion:0.5}}>
        {children}
      
    </motion.div>
  )
}

export default Smoothroute
