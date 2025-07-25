import useSinglePokemonQuery from "hooks/useTanstackQuery/usePokemon/useSinglePokemonQuery";
import IPokemon from "interfaces/Pokemon.interface";
import { ComponentPropsWithoutRef, memo } from "react";
import PokemonCardBody from "./PokemonCardBody";
import PokemonCardImage from "./PokemonCardImage";
import PokemonCardNumber from "./PokemonCardNumber";
import PokemonCardTitle from "./PokemonCardTitle";
import PokemonCardWrapper from "./PokemonCardWrapper";

type Props = (
	| { isLoading?: false | undefined; pokemon: { id: string; name: IPokemon["name"] } }
	| { isLoading: true }
) &
	ComponentPropsWithoutRef<"div">;

const PokemonCard = (props: Props) => {
	const { isLoading } = props;
	const pokemonId = !isLoading && props.pokemon?.id ? props.pokemon.id : undefined;

	// server state hooks
	const { data: pokemon, isLoading: isPokemonLoading } = useSinglePokemonQuery(pokemonId);

	// constants
	const loading = isLoading || isPokemonLoading;

	return (
		<PokemonCardWrapper isLoading={loading}>
			<PokemonCardImage
				isLoading={loading}
				imageUrl={pokemon?.sprites.other["official-artwork"].front_default || ""}
			/>
			<PokemonCardBody>
				<PokemonCardTitle
					isLoading={loading}
					name={pokemon?.name || ""}
					id={pokemon?.id || 1}
				/>
				<PokemonCardNumber isLoading={loading} id={pokemon?.id || 1} />
			</PokemonCardBody>
		</PokemonCardWrapper>
	);
};

export default memo(PokemonCard);
