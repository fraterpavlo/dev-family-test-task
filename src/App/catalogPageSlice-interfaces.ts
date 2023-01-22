import { IProductData } from "../components/productCard-interfaces";

export interface IAction {
  type: string;
  payload: number | string | IResultsState;
}

export interface IState {
  filtersState: IFiltersState;
  resultsState: IResultsState;
}

export interface IFiltersState {
  minPrice: null | string;
  maxPrice: null | string;
  selectedBrands: string[];
}

export interface IResultsState {
  isLoaded: boolean;
  productsData: IProductData[];
  error: null | string;
}
