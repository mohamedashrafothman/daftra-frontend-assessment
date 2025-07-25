"use client";

import IPokemon from "interfaces/Pokemon.interface";

type Props = { isLoading?: boolean | undefined } & Pick<IPokemon, "name">;

const PokemonSingleCardTitle = (props: Props) => (
	<h1 className="card-title h3 text-capitalize hstack gap-2 flex-nowrap justify-content-center align-items-center">
		{props.isLoading ? (
			<strong className="placeholder placeholder-sm bg-white w-75 w-lg-50">&nbsp;</strong>
		) : (
			<>
				<svg className="bi w-24px h-24px" width="16" height="16">
					<use href="#icon-lightning" />
				</svg>
				<strong>{props.name}</strong>
			</>
		)}
	</h1>
);

export default PokemonSingleCardTitle;
