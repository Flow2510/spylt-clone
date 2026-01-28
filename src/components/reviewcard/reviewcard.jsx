import { motion } from 'motion/react'
import './reviewcard.scss'

export default function ReviewCard({ video, icon, name, rotate}) {
    return(
        <motion.article 
            className={`review-card review-card--${name}`}
            initial={{ opacity: 0, rotateZ: rotate }}
            whileInView={{ opacity: 1, rotateZ: rotate }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <video className='review-card__video' src={video}></video>
            <div className='review-card__content'>
                <img className='review-card__content-avatar' src={icon} alt={`avatar of ${name}`} />
                <p className='review-card__content-text'>{name}</p>
            </div>
        </motion.article>
    )
}