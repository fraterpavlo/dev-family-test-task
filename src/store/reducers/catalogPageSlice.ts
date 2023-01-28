import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAction, IResultsState, IState } from "./catalogPageSlice.model";

export const fetchProducts = createAsyncThunk(
  "catalogPage/fetchProducts",
  async (link: string, { rejectWithValue }) => {
    try {
      const response = await fetch(link);

      if (!response.ok) throw new Error("Server Error!");

      const data = await response.json();
      console.log(data);
      
      return {
        products: data.products,
        filters: data.filters,
      };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const defaultState: IState = {
  filtersState: {
    minPrice: null,
    maxPrice: null,
    selectedBrands: [],
  },
  resultsState: {
    isLoaded: false,
    productsData: [],
    error: null,
  },
};

const catalogPageSlice = createSlice({
  name: "catalogPage",
  initialState: defaultState,
  reducers: {
    setMinPrice(state: IState, action: IAction) {
      state.filtersState = {
        ...state.filtersState,
        minPrice: action.payload as string,
      };
    },
    setMaxPrice(state: IState, action: IAction) {
      state.filtersState = {
        ...state.filtersState,
        maxPrice: action.payload as string,
      };
    },
    toggleSelectedBrand(state: IState, action: IAction) {
      const itemValue = action.payload as string;
      const selectedBrandsArr = state.filtersState.selectedBrands;

      state.filtersState = {
        ...state.filtersState,
        selectedBrands: selectedBrandsArr.includes(itemValue)
          ? selectedBrandsArr.filter((item) => item !== itemValue)
          : [...selectedBrandsArr, itemValue],
      };
    },
    setResultsState(state: IState, action: IAction) {
      state.resultsState = action.payload as IResultsState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.resultsState.isLoaded = false;
      state.resultsState.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.resultsState.isLoaded = true;
      state.resultsState.error = null;
      state.resultsState.productsData = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.resultsState.isLoaded = true;
      state.resultsState.error = action.payload as string;
    });
  },
});

export const { setMinPrice, setMaxPrice, toggleSelectedBrand } =
  catalogPageSlice.actions;
export default catalogPageSlice.reducer;
