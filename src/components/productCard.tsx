import { ICardProps } from "./productCard-interfaces";
import mockPhoto from "../no-image.svg";

export function ProductCard({
  productData,
  onClickCallBack,
  classNamesArr = [],
}: ICardProps) {
  return (
    <div
      className={`${"card"} ${classNamesArr?.join(" ")}`}
      onClick={onClickCallBack}
    >
      <div className="card__img-container">
        <img
          src={productData?.image?.desktop?.webp_x1 ?? mockPhoto}
          alt="camera"
          className="card__img"
        />
      </div>
      <div className="card__description-container">
        <span className="card__title">{productData.title}</span>
        <div className="card__row2-container">
          <span className="card__price">{productData.price}</span>
          {productData.is_new && (
            <span className="card__new-product-label">Новое</span>
          )}
        </div>
        <div className="card__row3-container">
          <button className="card__add-to-cart-btn">В корзину</button>
          <span className="card__add-to-favorite-icon"></span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
