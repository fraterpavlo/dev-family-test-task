export interface IProductData {
  id: number;
  title: string;
  slug: string;
  is_second_hand: boolean;
  price: string;
  discount_trade_in: number;
  is_new: boolean;
  condition: number;
  in_stock: boolean;
  category: {
    id: number;
    title: string;
    slug: string;
  };
  image: {
    desktop: {
      x1: string;
      x2: string;
      webp_x1: string;
      webp_x2: string;
    };
    tablet: {
      x1: string;
      x2: string;
      webp_x1: string;
      webp_x2: string;
    };
    mobile: {
      x1: string;
      x2: string;
      webp_x1: string;
      webp_x2: string;
    };
  };
}

export interface ICardProps {
  onClickCallBack?: (e: React.MouseEvent<HTMLDivElement>) => void;
  productData: IProductData;
  classNamesArr?: string[];
}
