"use client";

import IPokemon from "interfaces/Pokemon.interface";
import NextLink from "views/components/NextLink";

type Props = { isLoading?: boolean | undefined } & Pick<IPokemon, "id" | "name">;

const PokemonCardTitle = (props: Props) => (
	<h5 className="card-title h6 mb-0">
		{props.isLoading ? (
			<span className="placeholder bg-secondary w-75 mx-auto d-inline-block">&nbsp;</span>
		) : (
			<NextLink
				href={`/pokemon/${props.id}`}
				className="link-dark link-offset-1 link-underline-opacity-0 link-underline-opacity-75-hover stretched-link">
				<strong>
					<small>{props.name}</small>
				</strong>
			</NextLink>
		)}
	</h5>
);

export default PokemonCardTitle;
