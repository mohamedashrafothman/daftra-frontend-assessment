import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import queryClient from "config/tanstack-query";
import { getSinglePokemonQueryOptions } from "hooks/useTanstackQuery/usePokemon";
import Main from "views/sections/Main";
import PokemonSingle from "views/sections/PokemonSingle";

type Props = { params: { id: string } };

const page = ({ params: { id } }: Props) => {
	// prefetch pokemon details
	queryClient.prefetchQuery(getSinglePokemonQueryOptions(id));

	return (
		<Main className="main-single">
			<HydrationBoundary state={dehydrate(queryClient)}>
				<PokemonSingle />
			</HydrationBoundary>
		</Main>
	);
};

export default page;
