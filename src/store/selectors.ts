import { IState } from "./reducers/catalogPageSlice.model";
export const getFiltersState = (state: { catalogPage: IState }) =>
  state.catalogPage.filtersState;
export const getResultsState = (state: { catalogPage: IState }) =>
  state.catalogPage.resultsState;
export const getProductsData = (state: { catalogPage: IState }) =>
  state.catalogPage.resultsState.productsData;
