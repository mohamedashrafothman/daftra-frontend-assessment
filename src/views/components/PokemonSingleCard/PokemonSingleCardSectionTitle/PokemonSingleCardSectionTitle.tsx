"use client";

type Props = { title: string };

const PokemonSingleCardSectionTitle = ({ title }: Props) => (
	<h2 className="h5 text-capitalize mb-2 text-start">
		<strong>{title}</strong>
	</h2>
);

export default PokemonSingleCardSectionTitle;
