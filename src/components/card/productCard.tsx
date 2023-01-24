import { ICardProps } from "./productCard.model";
import mockPhoto from "../../no-image.svg";

export function ProductCard(props: ICardProps) {
  return (
    <div className="results-area__item card" onClick={props.onClickCallBack}>
      <div className="card__img-container">
        {/* <img
          src={props.productData?.image?.desktop?.webp_x1 ?? mockPhoto}
          alt="camera"
          className="card__img"
        /> */}
        <picture>
          <source
            srcSet={`${
              props.productData?.image?.desktop?.webp_x1 ?? mockPhoto
            }`}
            media="(min-width: 1080px)"
          />
          <source
            srcSet={`${props.productData?.image?.tablet?.webp_x1 ?? mockPhoto}`}
            media="(min-width: 500px)"
          />
          <source
            srcSet={`${props.productData?.image?.mobile?.webp_x1 ?? mockPhoto}`}
            media="(max-width: 500px)"
          />
          <img
            className="card__img"
            srcSet={`${props.productData?.image?.desktop?.x1 ?? mockPhoto}`}
            alt="Full Logo"
          />
        </picture>
      </div>
      <div className="card__description-container">
        <span className="card__title">{props.productData.title}</span>
        <div className="card__row2-of-description-container">
          <span className="card__price">{props.productData.price} ₽</span>
          {props.productData.in_stock && (
            <span className="card__product-in-stock-label">В наличии</span>
          )}
        </div>
        <div className="card__row3-of-description-container">
          <button className="card__add-to-cart-btn">В корзину</button>
          <button className="card__add-to-favorite-btn"></button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
