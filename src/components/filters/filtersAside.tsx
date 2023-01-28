import { useEffect } from "react";
import {
  fetchProducts,
  setMaxPrice,
  setMinPrice,
  toggleSelectedBrand,
} from "../../store/reducers/catalogPageSlice";
import {
  useAppDispatch,
  useAppSelector,
  convertObjToQueryString,
} from "../../hooks/hooks";
import { getFiltersState, getProductsData } from "../../store/selectors";
import { mockBrandsFilterData } from "./filtersAside.model";
import MyLazyNumberInput from "../UI/myLazyNumberInput/myLazyNumberInput";
import { baseURL } from "../../index";
// import queryString from "query-string";

export function FiltersAside() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(getFiltersState);
  const products = useAppSelector(getProductsData);

  // useEffect(() => {
  //   const searchString = queryString.parse(window.location.search);
  //   if (searchString["brands[]"]?.includes(EItemValueofBrands.Canon))
  //     onSelectBrandsCallBack(EItemValueofBrands.Canon);
  //   if (searchString["brands[]"]?.includes(EItemValueofBrands.Nikon))
  //     onSelectBrandsCallBack(EItemValueofBrands.Nikon);
  //   if (searchString["price[max]"])
  //     onInputMaxPriceCallBack(searchString["price[max]"] as string);
  //   if (searchString["price[min]"])
  //     onInputMinPriceCallBack(searchString["price[max]"] as string);
  // }, []);

  useEffect(() => {
    const queryObj = {
      brands: filters.selectedBrands ?? [],
      "price[min]": filters.minPrice ?? "",
      "price[max]": filters.maxPrice ?? "",
    };
    const encodedSearchQuery = decodeURI(convertObjToQueryString(queryObj));

    const fullQueryPath = `${
      encodedSearchQuery ? "?" : ""
    }${encodedSearchQuery}`;

    window.history.pushState({}, "", fullQueryPath);
    baseURL.search = encodedSearchQuery;
    dispatch(fetchProducts(baseURL.href));
  }, [filters]);

  const onInputMinPriceCallBack = (inputValue: string) => {
    dispatch(setMinPrice(inputValue));
  };

  const onInputMaxPriceCallBack = (inputValue: string) => {
    dispatch(setMaxPrice(inputValue));
  };

  const onSelectBrandsCallBack = (brand: string) => {
    dispatch(toggleSelectedBrand(brand));
  };

  return (
    <aside className="catalog-page__filters filters">
      <div className="filters__total-count-container total-count">
        <span className="total-count__label">Товаров </span>
        <span className="total-count__output">{products.length}</span>
      </div>
      <span className="filters__products-category-title">Камеры</span>
      <div className="filters__price-filter-container price-filter">
        <span className="price-filter__label">Цена, ₽</span>
        <div className="price-filter__inputs-container">
          <MyLazyNumberInput
            classNames={"price-filter__input price-filter__input_min"}
            defaultValue={filters?.minPrice ?? ""}
            placeholder={"min"}
            onInputCallBack={onInputMinPriceCallBack}
          />
          <MyLazyNumberInput
            classNames={"price-filter__input price-filter__input_max"}
            defaultValue={filters?.maxPrice ?? ""}
            placeholder={"max"}
            onInputCallBack={onInputMaxPriceCallBack}
          />
        </div>
      </div>
      <div className="filters__brand-filter-container brand-filter">
        <span className="brand-filter__label">Бренд</span>
        <div className="brand-filter__brands-list-container">
          {mockBrandsFilterData.map((itemData) => (
            <label
              key={itemData.value}
              className="brand-filter__brands-item brand-filter-item"
            >
              <input
                className="brand-filter-item__input_original"
                type="checkbox"
                onChange={() => onSelectBrandsCallBack(itemData.value)}
                checked={filters?.selectedBrands.includes(itemData.value)}
              />
              <span className="brand-filter-item__input_custom"></span>
              {itemData.title}
            </label>
          ))}

          {/* <label className="brand-filter__brands-item brand-filter-item">
            <input
              className="brand-filter-item__input_original"
              type="checkbox"
              onChange={() => onSelectBrandsCallBack(EItemValueofBrands.Canon)}
              checked={filters?.selectedBrands.includes(
                EItemValueofBrands.Canon
              )}
            />
            <span className="brand-filter-item__input_custom"></span>
            Canon
          </label>
          <label className="brand-filter__brands-item brand-filter-item">
            <input
              className="brand-filter-item__input_original"
              type="checkbox"
              onChange={() => onSelectBrandsCallBack(EItemValueofBrands.Nikon)}
              checked={filters?.selectedBrands.includes(
                EItemValueofBrands.Nikon
              )}
            />
            <span className="brand-filter-item__input_custom"></span>
            Nikon
          </label> */}
        </div>
      </div>
    </aside>
  );
}
