import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import type { AxiosErrorProps, AxiosResponseProps } from "config/axios";
import {
	getPokemon,
	getSinglePokemon,
	type GetPokemonDataType,
	type GetPokemonResponseType,
	type GetSinglePokemonResponseType,
} from "services/api/pokeapi/pokemon";
import vars from "utils/vars";
import usePokemonInfinityQuery from "./usePokemonInfinityQuery";
import usePokemonQuery from "./usePokemonQuery";
import useSinglePokemonQuery from "./useSinglePokemonQuery";

export const keyFactory = {
	all: () => ["pokemon"] as const,
	list: (query: Partial<GetPokemonDataType> = {}) =>
		[...keyFactory.all(), "list", query] as const,
	infinity: () => [...keyFactory.all(), "infinity"] as const,
	single: (id: string) => [...keyFactory.all(), "single", { id }] as const,
};

const getOffsetFromUrl = (url: string | null): number | undefined => {
	if (!url) return;
	const parsed = new URL(url);
	const offset = parseInt(parsed.searchParams.get("offset") || "0", 10);
	return offset / vars.pagination.limit + 1;
};

export const getSinglePokemonQueryOptions = (id?: string | undefined) =>
	queryOptions<GetSinglePokemonResponseType, AxiosErrorProps>({
		queryKey: keyFactory.single(id || ""),
		queryFn: id
			? () => getSinglePokemon({ variables: { id } }).then(({ data }) => data)
			: undefined,
		enabled: !!id,
	});

export const getPokemonQueryOptions = (
	query: Pick<GetPokemonDataType, "offset">,
	options?: object | undefined
) =>
	queryOptions<Pick<AxiosResponseProps<GetPokemonResponseType>, "data">["data"], AxiosErrorProps>(
		{
			queryKey: keyFactory.list(query),
			queryFn: () =>
				getPokemon({ params: { ...query, limit: vars.pagination.limit } }).then(
					({ data }) => data
				),
			...(options || {}),
		}
	);

export const getPokemonInfinityQueryOptions = () =>
	infiniteQueryOptions<
		Pick<AxiosResponseProps<GetPokemonResponseType>, "data">["data"],
		AxiosErrorProps
	>({
		queryKey: keyFactory.infinity(),
		queryFn: ({ pageParam = 1 }) =>
			getPokemon({
				params: {
					limit: vars.pagination.limit,
					offset: ((pageParam as number) - 1) * vars.pagination.limit,
				},
			}).then(({ data }) => data),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => getOffsetFromUrl(lastPage?.next),
		getPreviousPageParam: (firstPage) => getOffsetFromUrl(firstPage?.previous),
	});

export { usePokemonInfinityQuery, usePokemonQuery, useSinglePokemonQuery };
