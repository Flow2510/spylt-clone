import './header.scss'

export default function Header() {
    return(
        <header className='header'>
            <img className='header__logo' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bf546a161d4e2f1e4e06d1_SPYLT_Primary-logo_Black.svg" alt="" />
            <button className='header__link'>Find in stores</button>
        </header>
    )
}