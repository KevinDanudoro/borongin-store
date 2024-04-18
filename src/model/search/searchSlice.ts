import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export type Sorter =
  | "most-related"
  | "most-reviewed"
  | "most-expensive"
  | "most cheap";

interface Filter {
  price: number[];
  rating: number[];
}
interface SearchState {
  keyword: string;
  filter: Filter;
  sorter: Sorter;
}

// Define the initial state using that type
const initialState: SearchState = {
  keyword: "",
  filter: {
    price: [],
    rating: [],
  },
  sorter: "most-related",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    changePriceFilter: (state, action: PayloadAction<number[]>) => {
      state.filter.price = action.payload;
    },
    changeRatingFilter: (state, action: PayloadAction<number[]>) => {
      state.filter.rating = action.payload;
    },
    changeSorter: (state, action: PayloadAction<Sorter>) => {
      state.sorter = action.payload;
    },
  },
});

export const {
  changeKeyword,
  changePriceFilter,
  changeRatingFilter,
  changeSorter,
} = searchSlice.actions;

export default searchSlice.reducer;
