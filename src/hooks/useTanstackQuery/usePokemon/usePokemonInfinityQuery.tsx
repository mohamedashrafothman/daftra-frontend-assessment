"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { type AxiosErrorProps, type AxiosResponseProps } from "config/axios";
import { getPokemonInfinityQueryOptions } from "hooks/useTanstackQuery/usePokemon";
import { type GetPokemonResponseType } from "services/api/pokeapi/pokemon";

const usePokemonInfinityQuery = () =>
	useInfiniteQuery<AxiosResponseProps<GetPokemonResponseType>["data"], AxiosErrorProps>(
		getPokemonInfinityQueryOptions()
	);

export default usePokemonInfinityQuery;
