import React from 'react'
import { motion } from 'framer-motion'
const Main = () => {
    return (
        <div className='flex  justify-center w-full h-screen items-center'>
            <motion.div   className='gradient w-full h-screen '>
            <h1 className='text-6xl'>welcome to my portfolio</h1>
            </motion.div>
        </div>
    )
}

export default Main