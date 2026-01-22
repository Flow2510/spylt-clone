import ReviewCard from '../reviewcard/reviewcard';
import './media.scss';

export default function Media() {
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
                    <span className='media__title-span media__title-span--1'>What's</span>
                    <span className='media__title-span media__title-span--2'>Everyone</span>
                    <span className='media__title-span media__title-span--3'>Talking</span>
                </h2>
                <div className='media__gallery'>
                    <button className='media__gallery-button'>Explore All</button>
                    <div className='media__reviews-wrapper'>

                    </div>
                    <ReviewCard />  
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
            <div className='media__wave'>
                <img src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a79692bac3e381538a3e53_melting%20bg.svg" alt="" />
            </div>
        </section>
    )
}