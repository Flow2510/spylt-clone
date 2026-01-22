import './cta.scss'

export default function Cta() {
    return(
        <section className='cta'>
            <p className='cta__text'>
                <span className='cta__text-span'>Unlock the Advantages:</span>
                <span className='cta__text-span'>Explore the Key Benefits of Choosing SPYLT</span>
            </p>
            <h2 className='cta__title'>
                <span className='cta__title-span cta__title-span--1'>Shelf Stable</span>
                <span className='cta__title-span cta__title-span--2'>Protein + Caffeine</span>
                <span className='cta__title-span cta__title-span--3'>Infinitely Recyclable</span>
                <span className='cta__title-span cta__title-span--4'>Lactose Free</span>
            </h2>
            <p className='cta__subtitle'>
                And much more...
            </p>
        </section>
    )
}