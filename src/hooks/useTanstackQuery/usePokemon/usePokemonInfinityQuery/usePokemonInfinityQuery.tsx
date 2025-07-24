"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { type AxiosErrorProps, type AxiosResponseProps } from "config/axios";
import { INFINITY_KEY_ARRAY } from "hooks/useTanstackQuery/usePokemon";
import {
	getPokemon as queryFn,
	type GetPokemonDataType,
	type GetPokemonResponseType,
} from "services/api/pokeapi/pokemon";

const PAGE_SIZE = 10;

const usePokemonInfinityQuery = (query: GetPokemonDataType | undefined) =>
	useInfiniteQuery<
		Pick<AxiosResponseProps<GetPokemonResponseType>, "data">["data"],
		AxiosErrorProps
	>({
		queryKey: [...INFINITY_KEY_ARRAY, { ...(query || {}) }],
		queryFn: ({ pageParam = 1 }) =>
			queryFn({
				params: {
					limit: PAGE_SIZE,
					offset: ((pageParam as number) - 1) * PAGE_SIZE,
					...(query || {}),
				},
			}).then(({ data }) => data),
		initialPageParam: 1,
		maxPages: 1,
		getNextPageParam: (lastPage) => {
			if (!lastPage?.next) return;

			const url = new URL(lastPage.next);
			const offset = parseInt(url.searchParams.get("offset") || "0", 10);
			return offset / PAGE_SIZE + 1;
		},
		getPreviousPageParam: (firstPage) => {
			if (!firstPage?.previous) return;

			const url = new URL(firstPage.previous);
			const offset = parseInt(url.searchParams.get("offset") || "0", 10);
			return offset / PAGE_SIZE + 1;
		},
	});

export default usePokemonInfinityQuery;
