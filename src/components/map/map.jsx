import { motion } from 'motion/react'
import './map.scss'
import AnimatedText from '../animatedtext/animatedtext'

export default function Map() {
    return(
        <section className="map">
            <div className='map__content'>
                <h2 className='map__title'>
                    <AnimatedText
                        text={"Right Around"}
                    />
                    <motion.span 
                        className='map__title-span map__title-span--2'
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                        viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        The Corner
                    </motion.span>
                </h2>
                <p className='map__text'>Buy our drinks at your local store or get them delivered (to your door).</p>
            </div>
            <button className='map__button'>Find in Stores</button>
        </section>
    )
}