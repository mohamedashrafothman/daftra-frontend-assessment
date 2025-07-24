import Main from "views/sections/Main";
import PokemonListingLayout from "views/sections/PokemonListingLayout";

const page = () => (
	<Main className="main-listing">
		<PokemonListingLayout message="Discover and explore Pokémon with page controls">
			Pokemon listing page
		</PokemonListingLayout>
	</Main>
);

export default page;
