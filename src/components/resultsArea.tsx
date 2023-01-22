import { useAppSelector } from "../App/hooks";
import { getResultsState } from "../App/selectors";
import ProductCard from "./productCard";
import { IProductData } from "./resultsArea-interfaces";

export function ResultsArea() {
  const results = useAppSelector(getResultsState);

  const dataList = results.productsData;
  const cardList = dataList.map((itemData: IProductData) => (
    <ProductCard key={itemData.id} productData={itemData} />
  ));

  return (
    <div className={"catalog-page__results-area"}>
      {!results.isLoaded && <strong>Loading...</strong>}
      {results.error && <strong>{results.error}</strong>}
      {results.isLoaded && cardList}
    </div>
  );
}

export default ResultsArea;
