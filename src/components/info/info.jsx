import './info.scss';

export function Info() {
    return(
        <section className='info'>
            <img className='info__wave' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a38327a004aa2ce751e103_vawe-line.svg" alt="" />
            <img className='info__background' src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66f680a53c9d01623c840586_66ba173c3434647ad01ee996_14856267915%20123123%201-p-800.webp" alt="" />
            <div className='info__content'>
                <h2 className='info__title'>
                    <span className='info__title-span'>It still does</span>
                    <span className='info__title-span info__title-span--transform'>body good</span>
                </h2>
                <p>
                    Milk contains a wide array of
                    nutrients, including vitamins, minerals,
                    and protein, and this is lactose free
                </p>
            </div>
            <div className='info__wrapper'>
                <div className='info__informations'>
                    <p className='info__informations-text'>Vitamin A</p>
                    <span className='info__informations-span'>up to</span>
                    <span className='info__informations-span'>176mcg</span>
                </div>
                <div className='info__informations'>
                    <p className='info__informations-text'>Potassium</p>
                    <span className='info__informations-span'>up to</span>
                    <span className='info__informations-span'>245mg</span>
                </div>
                <div className='info__informations'>
                    <p className='info__informations-text'>Vitamin D</p>
                    <span className='info__informations-span'>up to</span>
                    <span className='info__informations-span'>5mcg</span>
                </div>
            </div>
        </section>
    )
}