"use client";

import { useQuery } from "@tanstack/react-query";
import { type AxiosErrorProps, type AxiosResponseProps } from "config/axios";
import { ALL_KEY_ARRAY } from "hooks/useTanstackQuery/usePokemon";
import {
	getPokemon as queryFn,
	type GetPokemonDataType,
	type GetPokemonResponseType,
} from "services/api/pokeapi/pokemon";
import vars from "utils/vars";

const usePokemonQuery = (query: Pick<GetPokemonDataType, "offset"> = {}) =>
	useQuery<Pick<AxiosResponseProps<GetPokemonResponseType>, "data">["data"], AxiosErrorProps>({
		queryKey: [...ALL_KEY_ARRAY, { ...(query || {}) }],
		queryFn: () =>
			queryFn({ params: { ...query, limit: vars.pagination.limit } }).then(
				({ data }) => data
			),
	});

export default usePokemonQuery;
