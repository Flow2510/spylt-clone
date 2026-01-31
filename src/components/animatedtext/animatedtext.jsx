import { motion } from "motion/react";

export default function AnimatedText({ text, stagger = 0.05, duration = 0.3, offset = "3rem" }){
    const letters = text.split("");

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };

    const letter = {
        hidden: {
            opacity: 0,
            y: offset,
        },
        visible: {
            opacity: 1,
            y: "0rem",
            transition: {
                duration,
                ease: "easeOut",
            },
        },
    };

    return(
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.6}}
            style={{ display: "inline-block" }}
        >
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={letter}
                    style={{ display: "inline-block"}}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}