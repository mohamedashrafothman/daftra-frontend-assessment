"use client";

import IPokemon from "interfaces/Pokemon.interface";
import { formatNumberToNDigits } from "utils/helpers";

type Props = { isLoading?: boolean | undefined } & Pick<IPokemon, "id">;

const PokemonCardNumber = ({ isLoading, id = 1 }: Props) => (
	<p className="card-text text-secondary mb-0">
		{isLoading ? (
			<small className="placeholder bg-secondary w-50 mx-auto d-inline-block">&nbsp;</small>
		) : (
			<small>{`#${formatNumberToNDigits(id, 3)}`}</small>
		)}
	</p>
);

export default PokemonCardNumber;
