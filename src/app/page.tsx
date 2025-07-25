import Main from "views/sections/Main";
import PokemonListing from "views/sections/PokemonListing";
import PokemonListingLayout from "views/sections/PokemonListingLayout";

const page = () => (
	<Main className="main-listing">
		<PokemonListingLayout message="Discover and explore Pokémon with page controls">
			<PokemonListing />
		</PokemonListingLayout>
	</Main>
);

export default page;
