import './products.scss'

export default function Products(){
    return(
        <section className='products'>
            <div className='products__header'>
                <button className='products__header-button'>
                    Get it now
                </button>
            </div>
            <div className='products__content'>
                <h2 className='products__title'>
                    <span className='products__title-span'>We have 6</span>
                    <span className='products__title-span products__title-span--transform'>Freaking</span>
                    <span className='products__title-span'>Delicious flavors</span>
                </h2>
            </div>
            <div className='products__gallery'>

            </div>
        </section>
    )
}