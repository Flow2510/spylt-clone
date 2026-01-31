import './hero.scss';
import {  motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from '../animatedtext/animatedtext';

export default function Hero() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

    return(
        <section className='hero'>
            <motion.div
                ref={ref}
                style={{ rotateZ, scale }}
                className="hero__wrapper"
            >
                <img className='hero__background' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/677bc442e480f9dca98be8a6_Group%2051994.png" alt="" />
                <div className='hero__content'>
                    <div className='hero__content-wrapper'>
                        <h2 className='hero__content-title'>
                            <AnimatedText 
                                text={"FREAKING DELICIOUS"}
                            />
                        </h2>
                        <motion.h3 
                            className='hero__content-subtitle' 
                            initial={{ clipPath: "inset(0 50% 0 50%)" }}
                            whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Protein + Caffeine
                        </motion.h3>
                    </div>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.4, delay: 0.2}}    
                    >
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </motion.p>
                    <motion.button 
                        className='hero__content-button'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.4, delay: 0.2}}    
                    >
                        Chug a Spylt
                    </motion.button>
                </div>
                <img className='hero__image' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bb5b3fe49150c2747edaf8_dbl%20(1).png" alt="" />
            </motion.div>
        </section>
    )
}