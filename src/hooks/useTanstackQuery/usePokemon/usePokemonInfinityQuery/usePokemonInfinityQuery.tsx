"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { type AxiosErrorProps, type AxiosResponseProps } from "config/axios";
import { INFINITY_KEY_ARRAY } from "hooks/useTanstackQuery/usePokemon";
import { getPokemon as queryFn, type GetPokemonResponseType } from "services/api/pokeapi/pokemon";
import vars from "utils/vars";

const usePokemonInfinityQuery = () =>
	useInfiniteQuery<
		Pick<AxiosResponseProps<GetPokemonResponseType>, "data">["data"],
		AxiosErrorProps
	>({
		queryKey: INFINITY_KEY_ARRAY,
		queryFn: ({ pageParam = 1 }) =>
			queryFn({
				params: {
					limit: vars.pagination.limit,
					offset: ((pageParam as number) - 1) * vars.pagination.limit,
				},
			}).then(({ data }) => data),
		getNextPageParam: (lastPage) => {
			if (!lastPage?.next) return;

			const url = new URL(lastPage.next);
			const offset = parseInt(url.searchParams.get("offset") || "0", 10);
			return offset / vars.pagination.limit + 1;
		},
		getPreviousPageParam: (firstPage) => {
			if (!firstPage?.previous) return;

			const url = new URL(firstPage.previous);
			const offset = parseInt(url.searchParams.get("offset") || "0", 10);
			return offset / vars.pagination.limit + 1;
		},
		initialPageParam: 1,
	});

export default usePokemonInfinityQuery;
