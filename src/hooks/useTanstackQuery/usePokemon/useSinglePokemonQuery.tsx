"use client";

import { useQuery } from "@tanstack/react-query";
import { type AxiosErrorProps } from "config/axios";
import { getSinglePokemonQuery } from "hooks/useTanstackQuery/usePokemon";
import { type GetSinglePokemonResponseType } from "services/api/pokeapi/pokemon";

const useSinglePokemonQuery = (id?: string | undefined) =>
	useQuery<GetSinglePokemonResponseType, AxiosErrorProps>(getSinglePokemonQuery(id));

export default useSinglePokemonQuery;
