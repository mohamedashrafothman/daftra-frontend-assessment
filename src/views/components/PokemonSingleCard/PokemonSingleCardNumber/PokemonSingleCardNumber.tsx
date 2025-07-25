"use client";

import IPokemon from "interfaces/Pokemon.interface";
import { formatNumberToNDigits } from "utils/helpers";

type Props = { isLoading?: boolean | undefined } & Pick<IPokemon, "id">;

const PokemonSingleCardNumber = ({ isLoading, id }: Props) => (
	<p className="lead op-60 m-0 lh-1p2">
		{isLoading ? (
			<small className="placeholder placeholder-sm bg-white w-50 w-lg-20 mx-auto">
				&nbsp;
			</small>
		) : (
			<small>{`#${formatNumberToNDigits(id, 3)}`}</small>
		)}
	</p>
);

export default PokemonSingleCardNumber;
