import './reviewcard.scss'

export default function ReviewCard() {
    return(
        <article className='review-card'>
            <video className='review-card__video' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db5c1208c8a25762bb619_1_Madison_1-transcode.mp4"></video>
            <div className='review-card__content'>
                <img src="" alt="" />
                <p>Name Surname</p>
            </div>
        </article>
    )
}