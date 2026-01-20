import './hero.scss';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return(
        <section className='hero'>
            <motion.div
                ref={ref}
                style={{ rotateZ, scale }}
                className="hero__wrapper"
            >
                <div className='hero__content'>
                    <div className='hero__content-wrapper'>
                        <h2 className='hero__content-title'>Freaking Delicious</h2>
                        <h3 className='hero__content-subtitle'>Protein + Caffeine</h3>
                    </div>
                    <p className='hero__content-text'>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</p>
                    <button className='hero__content-button'>Chug a Spylt</button>
                </div>
                <img className='hero__image' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bb5b3fe49150c2747edaf8_dbl%20(1).png" alt="" />
            </motion.div>
        </section>
    )
}