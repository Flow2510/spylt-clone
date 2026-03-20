import "./productcard.scss";

export default function ProductCard({ background, back, bottle, title}) {
    return(
        <article className="product-card">
            <div className="product-card__background" style={{ backgroundImage: `url(${background})` }}></div>
            <div className="product-card__ingredient" style={{ backgroundImage: `url(${back})` }}></div>
            <div className="product-card__bottle" style={{ backgroundImage: `url(${bottle})` }}></div>
            <h3 className="product-card__title">{title}</h3>
        </article>
    )
}