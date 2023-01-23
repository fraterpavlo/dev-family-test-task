import { FiltersAside } from "../components/filters/filtersAside";
import { ResultsArea } from "../components/resultsArea/resultsArea";

export function CatalogPage() {
  return (
    <div className="catalog-page page">
      <div className="catalog-page__container">
        <FiltersAside />
        <ResultsArea />
      </div>
    </div>
  );
}
