"use client";

import { type Type2 } from "interfaces/Pokemon.interface";

type Props = { isLoading: true } | ({ isLoading?: false | undefined } & Pick<Type2, "name">);

const PokemonSingleCardTypesListItem = (props: Props) => (
	<span className="badge text-bg-red text-capitalize">
		{props.isLoading ? (
			<span className="placeholder placeholder-sm bg-white w-75 mx-auto d-block">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</span>
		) : (
			props.name
		)}
	</span>
);

export default PokemonSingleCardTypesListItem;
