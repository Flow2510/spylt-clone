import './reviewcard.scss'

export default function ReviewCard({ video, icon, name, top, rotate}) {
    return(
        <article className={`review-card review-card--${name}`} style={{ top: `${top}%`, transform: `rotatez(${rotate}deg)  translateY(-50%)` }}>
            <video className='review-card__video' src={video}></video>
            <div className='review-card__content'>
                <img src={icon} alt={`avatar of ${name}`} />
                <p>{name}</p>
            </div>
        </article>
    )
}