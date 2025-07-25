import axiosInstance, { type AxiosRequestConfig, type AxiosResponseProps } from "config/axios";
import IPokemon from "interfaces/Pokemon.interface";

// request and response types
export type GetPokemonDataType = { limit?: number | undefined; offset?: number | undefined };
export type GetPokemonResponseType = {
	count: number;
	next: string | null;
	previous: string | null;
	results: { name: IPokemon["name"]; url: string }[];
};
export type GetSinglePokemonDataType = object;
export type GetSinglePokemonResponseType = IPokemon;

export const getPokemon = ({ ...options }: AxiosRequestConfig<GetPokemonDataType>) =>
	axiosInstance<GetPokemonResponseType, AxiosResponseProps<GetPokemonResponseType>>({
		url: "/v2/pokemon",
		...options,
	});

export const getSinglePokemon = ({
	variables,
	...options
}: AxiosRequestConfig<GetSinglePokemonDataType> & { variables: { id: string } }) =>
	axiosInstance<GetSinglePokemonResponseType, AxiosResponseProps<GetSinglePokemonResponseType>>({
		url: `/v2/pokemon/${variables?.id}`,
		...options,
	});
