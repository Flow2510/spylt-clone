import './loader.scss';

export default function Loader({ percentage, elRef }) {
    
    const width = percentage + "%"

    return(
        <main>
            <div className='loader'>
                <img src="/src/assets/images/logo.svg" alt="" />
                <div className='loader__wrapper'>
                    <span className='loader__percentage' id='loader__percentage' ref={elRef}>
                        {percentage}%
                    </span>
                    <div className='loader__bar'>
                        <div className='loader__bar--fill' style={{ width: width }}></div>
                    </div>
                </div>
            </div>
        </main>
    )
}