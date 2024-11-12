'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
    src: string; 
    width: number;      
    height: number;
    index: number;
};

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const animationDelay = 0.15; 

    return (
        <motion.div
            ref={ref} 
            initial="hidden" // Corrected here
            variants={imageVariants} // Corrected here
            animate={inView ? "visible" : "hidden"} // Corrected here
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <img 
                src={src}
                width={width}
                height={height}
                alt="Skill Image" 
            />
        </motion.div>
    );
}

export default SkillDataProvider;
