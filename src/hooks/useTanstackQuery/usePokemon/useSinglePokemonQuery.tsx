"use client";

import { useQuery } from "@tanstack/react-query";
import type { AxiosErrorProps, AxiosResponseProps } from "config/axios";
import { getSinglePokemonQueryOptions } from "hooks/useTanstackQuery/usePokemon";
import { type GetSinglePokemonResponseType } from "services/api/pokeapi/pokemon";

const useSinglePokemonQuery = (id?: string | undefined) =>
	useQuery<AxiosResponseProps<GetSinglePokemonResponseType>["data"], AxiosErrorProps>(
		getSinglePokemonQueryOptions(id)
	);

export default useSinglePokemonQuery;
