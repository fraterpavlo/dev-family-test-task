import { FiltersAside } from "../components/filtersAside";
import { ResultsArea } from "../components/resultsArea";
import { useAppDispatch } from "../App/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../App/catalogPageSlice";
import { baseURL } from "../index";

export function CatalogPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(baseURL.href));
  }, [dispatch]);

  return (
    <div className="catalog-page page">
      <div className="catalog-page__container">
        <FiltersAside />
        <ResultsArea />
      </div>
    </div>
  );
}
