import AnimatedText from '../animatedtext/animatedtext';
import './footer.scss';

export default function Footer() {
    const handleSubmitClick = (e) => {
        e.preventDefault();
    }

    return(
        <footer className='footer'>
            <img src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/677bd1bf601d3d085c4c2bf3_image%201834.png" className='footer__background' alt="" />
            <div className='footer__title-wrapper'>
                <h2 className='footer__title'>
                    <AnimatedText 
                        text={"#CHUGRESPONSIBLY"}
                    />
                </h2>
                <div className='footer__social'>
                    <a className='footer__social-link' href="#">
                        <img src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a79d28cb8a1d28dd93cc2a_youtube-logo.svg" alt="" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a79d2834bbc2ceaa8ebae2_instagram-logo.svg" alt="" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a79d28a6b0b117a9083b9c_tictock-logo.svg" alt="" />
                    </a>
                </div>
            </div>
            <nav className='footer__nav'>
                <div className='footer__nav-wrapper'>
                    <a className='footer__nav-link' href="#">SPYLT Flavors</a>
                </div>
                <div className='footer__nav-wrapper'>
                    <a className='footer__nav-link' href="#">Chug Club</a>
                    <a className='footer__nav-link' href="#">Student Marketing</a>
                    <a className='footer__nav-link' href="#">Dairy Dealers</a>
                </div>
                <div className='footer__nav-wrapper'>
                    <a className='footer__nav-link' href="#">Company</a>
                    <a className='footer__nav-link' href="#">Contacts</a>
                    <a className='footer__nav-link' href="#">Tasty Talk</a>
                </div>
            </nav>
            <form action="" onSubmit={handleSubmitClick} className='footer__form'>
                <p className='footer__form-text'>Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!</p>
                <label htmlFor="" className='footer__form-label'>
                    <input className='footer__form-input' type="email" placeholder='Enter your email'/>
                    <button className='footer__form-button'>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </label>
            </form>
            <div className='footer__link-wrapper'>
                <a href="" className='footer__link'>Privacy Policy</a>
                <a href="" className='footer__link'>Terms Of Service</a>
            </div>
            <p className='footer__copyright'>Copyright © 2025 Spylt - All Rights Reserved</p>
        </footer>
    )
}