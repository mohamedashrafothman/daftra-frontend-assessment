"use client";

import IPokemon from "interfaces/Pokemon.interface";

type Props = {
	isLoading?: boolean | undefined;
	value?: IPokemon["base_experience"] | undefined;
};

const PokemonSingleCardExperienceNumber = ({ isLoading, value = 0 }: Props) => (
	<p className="fs-4 text-uppercase text-purple mb-0">
		{isLoading ? (
			<strong className="placeholder placeholder-sm bg-secondary w-50 w-lg-20">&nbsp;</strong>
		) : (
			<strong>{`${value} XP`}</strong>
		)}
	</p>
);

export default PokemonSingleCardExperienceNumber;
