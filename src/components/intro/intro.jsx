import './intro.scss';

export default function Intro() {
    return(
        <section className='intro'>
            <div className='intro__content'>
                <h2 className='intro__content-title'>
                    <span className='intro__content-span'>Stir up your </span>
                    <span className='intro__content-span'>fearless past and </span>
                    <span className='intro__content-span intro__content-span--transform'>Fuel up</span>
                    <span className='intro__content-span'>your future with every </span>
                    <span className='intro__content-span'>gulp of Perfect Protein </span>
                </h2>
                <p className='intro__content-text'>
                    Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.
                </p>
            </div>
        </section>
    )
}