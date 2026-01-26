import { motion } from 'motion/react'
import ProductCard from '../productcard/productcard'
import './products.scss'

export default function Products(){
    const flavors = [
        {
            background: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a342364feb3829533de65_bg.svg",
            back: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a343e1c547b7a70b86e0c_pieces-p-800.webp",
            bottle: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a342ae57ea5823882fe46_can1-p-800.webp",
            title: "Chocolate Milk"
        },
        {
            background: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34acccf5df70b0721bd0_bg-2.svg",
            back: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a349c711884a20dbc9ab0_pieces-2-p-800.webp",
            bottle: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34981daf0c76b8448018_can3-p-800.webp",
            title: "Strawberry Milk"
        },
        {
            background: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a351764feb38295350adb_bg-4.svg",
            back: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/67c5bb3cb683bcb19d9a6583_946_pieces-p-800.webp",
            bottle: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a35066bd670216fa7fedc_can5-p-800.webp",
            title: "Cookies & Cream"
        },
        {
            background: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a3533c43d4812ebcd6853_bg-5.svg",
            back: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a353fac5751c25dc5b999_pieces-5-p-800.webp",
            bottle: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a353cd91623e4f88dc60f_can6-p-800.webp",
            title: "Peanut Butter Chocolate"
        },
        {
            background: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34d9e28ab3e48d154128_bg-3.svg",
            back: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34e85f60cc1294aafa41_pieces-3-p-800.webp",
            bottle: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34e1153f682eb6195b30_can4-p-800.webp",
            title: "Vanilla Milkshake"
        },
        {
            background: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a346d7e435f4b6be31247_bg-1.svg",
            back: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a347ce10437db0859096f_pieces-1-p-800.webp",
            bottle: "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34750cbc5c99754742fe_can2-p-800.webp",
            title: "Max Chocolate Milk"
        }
    ]

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
                    <motion.span 
                        className='products__title-span products__title-span--transform'
                        initial={{ clipPath: "inset(0 50% 0 50%)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
                        viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Freaking
                    </motion.span>
                    <span className='products__title-span'>Delicious flavors</span>
                </h2>
            </div>
            <div className='products__gallery'>
                {flavors.map((flavor) => (
                    <ProductCard 
                        background={flavor.background}
                        back={flavor.back}
                        bottle={flavor.bottle}
                        title={flavor.title}
                    />
                ))}
            </div>
        </section>
    )
}