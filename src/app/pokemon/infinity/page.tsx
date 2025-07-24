import Main from "views/sections/Main";
import PokemonInfinityListing from "views/sections/PokemonInfinityListing";
import PokemonListingLayout from "views/sections/PokemonListingLayout";

const page = () => (
	<Main className="main-listing-infinity">
		<PokemonListingLayout message="Discover and explore Pokémon with infinity scroll">
			<PokemonInfinityListing />
		</PokemonListingLayout>
	</Main>
);

export default page;
