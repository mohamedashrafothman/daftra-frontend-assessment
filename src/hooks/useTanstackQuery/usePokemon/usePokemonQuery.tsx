"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { type AxiosErrorProps, type AxiosResponseProps } from "config/axios";
import { getPokemonQueryOptions } from "hooks/useTanstackQuery/usePokemon";
import { type GetPokemonDataType, type GetPokemonResponseType } from "services/api/pokeapi/pokemon";

const usePokemonQuery = (
	query: Pick<GetPokemonDataType, "offset"> = {},
	options?: Omit<
		UseQueryOptions<AxiosResponseProps<GetPokemonResponseType>["data"], AxiosErrorProps>,
		"queryFn" | "queryKey"
	>
) =>
	useQuery<AxiosResponseProps<GetPokemonResponseType>["data"], AxiosErrorProps>(
		getPokemonQueryOptions(query, options)
	);

export default usePokemonQuery;
