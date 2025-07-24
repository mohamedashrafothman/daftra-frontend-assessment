import useSinglePokemonQuery from "hooks/useTanstackQuery/usePokemon/useSinglePokemonQuery";
import IPokemon from "interfaces/Pokemon.interface";
import { ComponentPropsWithoutRef, memo } from "react";

type Props = (
	| { isLoading?: false | undefined; pokemon: { id: string; name: IPokemon["name"] } }
	| { isLoading: true }
) &
	ComponentPropsWithoutRef<"div">;

const PokemonCard = (props: Props) => {
	const { data: pokemon, isLoading: isPokemonLoading } = useSinglePokemonQuery(
		!props.isLoading && props.pokemon?.id ? props.pokemon.id : undefined
	);

	if (isPokemonLoading || props.isLoading) return <div>Loading...</div>;

	return <div>{pokemon?.name || "Pokemon not found"}</div>;
};

export default memo(PokemonCard);
