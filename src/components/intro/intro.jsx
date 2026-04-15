import { motion, useScroll, useTransform } from 'motion/react';
import './intro.scss';
import { useRef } from 'react';

export default function Intro() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 60%", "start 20%"]
    })

    const color = useTransform(scrollYProgress, [0, 1], ["#faeade80", "#faeade"])

    return(
        <section className='intro'>
            <div className='intro__content'>
                <h2 className='intro__content-title'ref={ref}>
                    <motion.span style={{ color }} className='intro__content-span'>Stir up your</motion.span>
                    <motion.span style={{ color }} className='intro__content-span'>fearless past and </motion.span>
                    <motion.span 
                        className='intro__content-span intro__content-span--transform'
                        initial={{ clipPath: "inset(0 0 0 100%)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
                    >
                        Fuel up
                    </motion.span>
                    <motion.span style={{ color }} className='intro__content-span'>your future with every </motion.span>
                    <motion.span style={{ color }} className='intro__content-span'>gulp of Perfect Protein </motion.span>
                </h2>
                <p className='intro__content-text'>
                    Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.
                </p>
            </div>
        </section>
    )
}