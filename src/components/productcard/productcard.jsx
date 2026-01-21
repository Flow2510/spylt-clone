import "./productcard.scss";

export default function ProductCard({ background, back, bottle, title}) {
    return(
        <article className="product-card">
            <img className="product-card__background" src={background} alt="" />
            <img className="product-card__back" src={back} alt="" />
            <img className="product-card__bottle" src={bottle} alt="" />
            <h3 className="product-card__title">{title}</h3>
        </article>
    )
}