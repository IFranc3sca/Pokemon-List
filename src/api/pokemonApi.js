import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as constants from "../constants/constants";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: constants.API_POKEMON,
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: () => ({
        url: "/pokemon/?limit=20",
        method: "GET",
      }),
      cacheTime: 0,
    }),
    getPokemonById: builder.query({
      query: (name) => ({
        url: `/pokemon/${name}`,
        method: "GET",
      }),
      cacheTime: 0,
    }),
  }),
});

export const { useLazyGetPokemonListQuery, useLazyGetPokemonByIdQuery } =
  pokemonApi;
