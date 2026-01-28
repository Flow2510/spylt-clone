import { motion, useTransform, useScroll } from 'motion/react';
import ReviewCard from '../reviewcard/reviewcard';
import './media.scss';
import { useRef } from 'react';

export default function Media() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const xRight = useTransform(scrollYProgress, [0, 1], [0, 70]);
    const xShortRight = useTransform(scrollYProgress, [0, 1], [0, 30]);
    const xLeft = useTransform(scrollYProgress, [0, 1], [0, -70]);


    return(
        <section className='media'>
            <div className='media__video-wrapper'>
                <video className='media__video-video' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F66ba106403383a807d33ff07_man%20mashup-transcode.mp4" loop muted autoPlay></video>
                <div className='media__video-content'>
                    <div className='media__video-circle'></div>
                    <img className='media__video-image' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bb5dfdded663c0354ecd59_play.svg" alt="" />
                    <p className='media__video-icon'><i className="fa-solid fa-play"></i></p>
                </div>
            </div>
            <div className='media__reviews'>
                <h2 className='media__title'>
                    <motion.span ref={ref} style={{ x: xRight }} className='media__title-span media__title-span--1'>What's</motion.span>
                    <motion.span ref={ref} style={{ x: xShortRight }} className='media__title-span media__title-span--2'>Everyone</motion.span>
                    <motion.span ref={ref} style={{ x: xLeft }} className='media__title-span media__title-span--3'>Talking</motion.span>
                </h2>
                <button className='media__button'>Explore All</button>
                <div className='media__gallery'>
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db5c1208c8a25762bb619_1_Madison_1-transcode.mp4"}
                        name={"Madison"}
                        icon={""}
                        rotate={-8}
                    />  
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db740f86577023a832835_1_AlexanderM_1-transcode.webm"}
                        name={"Alexander"}
                        icon={""}
                        rotate={3}
                    />
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db80618ee4a59f2efb198_1_AndrewC_1-transcode.webm"}
                        name={"Andrew"}
                        icon={""}
                        rotate={-4}
                    />
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db855456668dfc4c52615_1_BryanK_1-transcode.webm"}
                        name={"Bryan"}
                        icon={""}
                        rotate={6}
                    />
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db8a83056c32978e4c03a_1_ChrisS_1-transcode.webm"}
                        name={"Chris"}
                        icon={""}
                        rotate={-2}
                    />
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db8e8928a767c7d03f23e_1_Devante_1-transcode.webm"}
                        name={"Devante"}
                        icon={""}
                        rotate={3}
                    />
                    <ReviewCard 
                        video={"https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db97971e0f65e1b9dfd21_1_MelissaJ_1-transcode.webm"}
                        name={"Melissa"}
                        icon={""}
                        rotate={-1}
                    />
                </div>
            </div>
            <div className='media__wave'>
                <img src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a79692bac3e381538a3e53_melting%20bg.svg" alt="" />
            </div>
        </section>
    )
}