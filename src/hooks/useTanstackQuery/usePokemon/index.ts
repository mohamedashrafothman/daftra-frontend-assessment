import { QueryFunctionContext } from "@tanstack/react-query";
import {
	getPokemon,
	type GetPokemonDataType,
	type GetPokemonResponseType,
	getSinglePokemon,
} from "services/api/pokeapi/pokemon";
import vars from "utils/vars";
import usePokemonInfinityQuery from "./usePokemonInfinityQuery";
import usePokemonQuery from "./usePokemonQuery";
import useSinglePokemonQuery from "./useSinglePokemonQuery";

export const ALL_KEY_ARRAY = ["pokemon"] as const;
export const INFINITY_KEY_ARRAY = [...ALL_KEY_ARRAY, "infinity"] as const;
export const SINGLE_KEY_ARRAY = [...ALL_KEY_ARRAY, "single"] as const;

export const getSinglePokemonQueryOptions = (id?: string | undefined) => ({
	queryKey: [...SINGLE_KEY_ARRAY, id],
	queryFn:
		id !== undefined
			? () => getSinglePokemon({ variables: { id } }).then(({ data }) => data)
			: undefined,
	enabled: id !== undefined,
});
export const getPokemonQueryOptions = (
	query: Pick<GetPokemonDataType, "offset">,
	options?: object | undefined
) => ({
	queryKey: [...ALL_KEY_ARRAY, { ...(query || {}) }],
	queryFn: () =>
		getPokemon({ params: { ...query, limit: vars.pagination.limit } }).then(({ data }) => data),
	...(options || {}),
});
export const getPokemonInfinityQueryOptions = () => ({
	queryKey: INFINITY_KEY_ARRAY,
	queryFn: ({ pageParam = 1 }: QueryFunctionContext) =>
		getPokemon({
			params: {
				limit: vars.pagination.limit,
				offset: ((pageParam as number) - 1) * vars.pagination.limit,
			},
		}).then(({ data }) => data),
	initialPageParam: 1,
	getNextPageParam: (lastPage: GetPokemonResponseType) => {
		if (!lastPage?.next) return;

		const url = new URL(lastPage.next);
		const offset = parseInt(url.searchParams.get("offset") || "0", 10);
		return offset / vars.pagination.limit + 1;
	},
	getPreviousPageParam: (firstPage: GetPokemonResponseType) => {
		if (!firstPage?.previous) return;

		const url = new URL(firstPage.previous);
		const offset = parseInt(url.searchParams.get("offset") || "0", 10);
		return offset / vars.pagination.limit + 1;
	},
});

export { usePokemonInfinityQuery, usePokemonQuery, useSinglePokemonQuery };
