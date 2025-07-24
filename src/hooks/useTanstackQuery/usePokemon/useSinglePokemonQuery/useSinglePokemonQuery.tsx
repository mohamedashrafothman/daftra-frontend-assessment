"use client";

import { useQuery } from "@tanstack/react-query";
import { type AxiosErrorProps } from "config/axios";
import { SINGLE_KEY_ARRAY } from "hooks/useTanstackQuery/usePokemon";
import {
	getSinglePokemon as queryFn,
	type GetSinglePokemonResponseType,
} from "services/api/pokeapi/pokemon";

const useSinglePokemonsQuery = (id: string) =>
	useQuery<GetSinglePokemonResponseType, AxiosErrorProps>({
		queryKey: [...SINGLE_KEY_ARRAY, id],
		queryFn: () => queryFn({ variables: { id } }).then(({ data }) => data),
		enabled: !!id,
	});

export default useSinglePokemonsQuery;
