import { useAppSelector } from "../../hooks/hooks";
import { getResultsState } from "../../store/selectors";
import ProductCard from "../card/productCard";
import { IProductData } from "./resultsArea.model";

export function ResultsArea() {
  const results = useAppSelector(getResultsState);

  const dataList = results.productsData;
  const cardList = dataList.map((itemData: IProductData) => (
    <ProductCard key={itemData.id} productData={itemData} />
  ));

  return (
    <div className={"catalog-page__results-area results-area"}>
      {!results.isLoaded && <strong>Loading...</strong>}
      {results.error && <strong>{results.error}</strong>}
      {results.isLoaded && cardList}
    </div>
  );
}

export default ResultsArea;
