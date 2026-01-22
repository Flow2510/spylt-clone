import './map.scss'

export default function Map() {
    return(
        <section className="map">
            <div className='map__content'>
                <h2 className='map__title'>
                    <span className='map__title-span map__title-span--1'>Right Around</span>
                    <span className='map__title-span map__title-span--2'>The Corner</span>
                </h2>
                <p className='map__text'>Buy our drinks at your local store or get them delivered (to your door).</p>
            </div>
            <button className='map__button'>Find in Stores</button>
        </section>
    )
}