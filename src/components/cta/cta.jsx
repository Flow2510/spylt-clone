import { motion } from 'motion/react'
import './cta.scss'

export default function Cta() {
    return(
        <section className='cta'>
            <p className='cta__text'>
                <span className='cta__text-span'>Unlock the Advantages:</span>
                <span className='cta__text-span'>Explore the Key Benefits of Choosing SPYLT</span>
            </p>
            <h2 className='cta__title'>
                <motion.span 
                    className='cta__title-span cta__title-span--1'
                    initial={{ clipPath: "inset(0 50% 0 50%)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Shelf Stable
                </motion.span>
                <motion.span 
                    className='cta__title-span cta__title-span--2'
                    initial={{ clipPath: "inset(0 50% 0 50%)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Protein + Caffeine
                </motion.span>
                <motion.span 
                    className='cta__title-span cta__title-span--3'
                    initial={{ clipPath: "inset(0 50% 0 50%)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Infinitely Recyclable
                </motion.span>
                <motion.span 
                    className='cta__title-span cta__title-span--4'
                    initial={{ clipPath: "inset(0 50% 0 50%)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Lactose Free
                </motion.span>
            </h2>
            <p className='cta__subtitle'>
                And much more...
            </p>
        </section>
    )
}