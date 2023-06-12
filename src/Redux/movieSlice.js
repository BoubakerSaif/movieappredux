import { createSlice } from "@reduxjs/toolkit";
import Data from "../Components/Data";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: Data },
  reducers: {
    addMovie: (state, { payload }) => {
      //   state.movies = [...state.movies, payload];
      state.movies.push(payload);
    },
  },
});

export default movieSlice.reducer;

export const { addMovie } = movieSlice.actions;
