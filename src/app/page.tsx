import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import queryClient from "config/tanstack-query";
import {
	getPokemonQueryOptions,
	getSinglePokemonQueryOptions,
} from "hooks/useTanstackQuery/usePokemon";
import { type GetPokemonResponseType } from "services/api/pokeapi/pokemon";
import { extractIdFromUrl } from "utils/helpers";
import vars from "utils/vars";
import Main from "views/sections/Main";
import PokemonListing from "views/sections/PokemonListing";
import PokemonListingLayout from "views/sections/PokemonListingLayout";

type Props = { searchParams: { page: string } };

const page = async ({ searchParams }: Props) => {
	const page = Number(searchParams.page) || 1;

	// prefetch pokemon data
	const getPokemonOptions = getPokemonQueryOptions({
		offset: (page - 1) * vars.pagination.limit,
	});
	await queryClient.prefetchQuery(getPokemonOptions);
	const prefetchedData =
		(queryClient.getQueryState(getPokemonOptions.queryKey)?.data as GetPokemonResponseType) ||
		{};

	// prefetch pokemon details
	[...(prefetchedData?.results || [])].forEach(
		async (pokemon) =>
			await queryClient.prefetchQuery(
				getSinglePokemonQueryOptions(extractIdFromUrl(pokemon.url))
			)
	);

	return (
		<Main className="main-listing">
			<PokemonListingLayout message="Discover and explore Pokémon with page controls">
				<HydrationBoundary state={dehydrate(queryClient)}>
					<PokemonListing />
				</HydrationBoundary>
			</PokemonListingLayout>
		</Main>
	);
};

export default page;
