"use client";

import { useQuery } from "@tanstack/react-query";
import { type AxiosErrorProps } from "config/axios";
import { SINGLE_KEY_ARRAY } from "hooks/useTanstackQuery/usePokemon";
import {
	getSinglePokemon as queryFn,
	type GetSinglePokemonResponseType,
} from "services/api/pokeapi/pokemon";

const useSinglePokemonQuery = (id?: string | undefined) =>
	useQuery<GetSinglePokemonResponseType, AxiosErrorProps>({
		queryKey: [...SINGLE_KEY_ARRAY, id],
		queryFn:
			id !== undefined
				? () => queryFn({ variables: { id } }).then(({ data }) => data)
				: undefined,
		enabled: id !== undefined,
	});

export default useSinglePokemonQuery;
