import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import queryClient from "config/tanstack-query";
import {
	getPokemonInfinityQueryOptions,
	getSinglePokemonQueryOptions,
} from "hooks/useTanstackQuery/usePokemon";
import { type GetPokemonResponseType } from "services/api/pokeapi/pokemon";
import { extractIdFromUrl, flattenDeep } from "utils/helpers";
import Main from "views/sections/Main";
import PokemonInfinityListing from "views/sections/PokemonInfinityListing";
import PokemonListingLayout from "views/sections/PokemonListingLayout";

const page = async () => {
	// prefetch pokemon data
	const getPokemonInfinityOptions = getPokemonInfinityQueryOptions();
	await queryClient.prefetchInfiniteQuery(getPokemonInfinityOptions);
	const prefetchedData =
		(queryClient.getQueryState(getPokemonInfinityOptions.queryKey)?.data as any) || {};
	const dataList = flattenDeep(
		prefetchedData?.pages.map((page: GetPokemonResponseType) => page?.results || [])
	);

	// prefetch pokemon details
	[...(dataList || [])].forEach((pokemon) =>
		queryClient.prefetchQuery(getSinglePokemonQueryOptions(extractIdFromUrl(pokemon.url)))
	);

	return (
		<Main className="main-listing-infinity">
			<PokemonListingLayout message="Discover and explore Pokémon with infinity scroll">
				<HydrationBoundary state={dehydrate(queryClient)}>
					<PokemonInfinityListing />
				</HydrationBoundary>
			</PokemonListingLayout>
		</Main>
	);
};

export default page;
