"use client";

import { useQuery } from "@tanstack/react-query";
import { type AxiosErrorProps, type AxiosResponseProps } from "config/axios";
import { getPokemonQueryOptions } from "hooks/useTanstackQuery/usePokemon";
import { type GetPokemonDataType, type GetPokemonResponseType } from "services/api/pokeapi/pokemon";

const usePokemonQuery = (
	query: Pick<GetPokemonDataType, "offset"> = {},
	options?: object | undefined
) =>
	useQuery<Pick<AxiosResponseProps<GetPokemonResponseType>, "data">["data"], AxiosErrorProps>(
		getPokemonQueryOptions(query, options)
	);

export default usePokemonQuery;
