import './cta.scss';

export default function Cta() {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <h2 className='cta__content-title'>
                    <span className='cta__content-span'>Stir up your </span>
                    <span className='cta__content-span'>fearless past and </span>
                    <span className='cta__content-span cta__content-span--transform'>Fuel up</span>
                    <span className='cta__content-span'>your future with every </span>
                    <span className='cta__content-span'>gulp of Perfect Protein </span>
                </h2>
                <p className='cta__content-text'>
                    Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.
                </p>
            </div>
        </section>
    )
}