import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

export type ObserverProps = { //takes the following as inputs when Observer component is used externally
  visibility: number;
  time: number;
  start: number;
  end: number;
  text: string;
  className?: string;
  id?: string;

}
export default function Observer(props: ObserverProps) {
    const { visibility, time, start, end, text, className, id } = props;
  
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger only once when the element comes into view
      threshold: visibility,
    });
  
    // Debounce the inView state
    const [debouncedInView, setDebouncedInView] = useState(inView);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebouncedInView(inView);
      }, 100); // Delay of 100ms to debounce
      
      return () => clearTimeout(timeout); // Cleanup on unmount
    }, [inView]);
  
    // Define animation variants
    const variants = {
      hidden: { opacity: 0, y: start },
      visible: { opacity: 1, y: end },
    };
  
    return (
      <motion.div
        className={className}
        id={id}
        ref={ref}
        initial="hidden"
        animate={debouncedInView ? "visible" : "hidden"}
        transition={{ duration: time, ease: "easeOut" }}
        variants={variants}
        layout
        style={{ willChange: "opacity, transform" }}  // Helps optimize animation
      >
        {text}
      </motion.div>
    );
  }

{/* <motion.h3 
                    id="page-banner-title" 
                    initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 50, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: false, amount: .5 }}
                    >We're the 2nd Law Enforcers: FIRST ® Robotics Competition Team 178 from Farmington, Connecticut. We aim to provide real-world opportunities for all team members to grow as individuals and as leaders, to pursue their passions, to explore STEM fields, and to give back to the community by inspiring young children.</motion.h3>
                </div> */}