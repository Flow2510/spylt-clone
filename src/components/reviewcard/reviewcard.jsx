import { motion } from 'motion/react'
import './reviewcard.scss'

export default function ReviewCard({ video, icon, name}) {
    return(
        <article 
            className={`review-card`}
        >
            <video className='review-card__video' src={video}></video>
            <div className='review-card__overlay'></div>
            <div className='review-card__content'>
                <img className='review-card__content-avatar' src={icon} alt={`avatar of ${name}`} />
                <p className='review-card__content-text'>{name}</p>
            </div>
        </article>
    )
}