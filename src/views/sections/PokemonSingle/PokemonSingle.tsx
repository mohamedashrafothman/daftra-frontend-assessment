"use client";

import useSinglePokemonQuery from "hooks/useTanstackQuery/usePokemon/useSinglePokemonQuery";
import { useParams, useRouter } from "next/navigation";
import PokemonSingleCard from "views/components/PokemonSingleCard";

const PokemonSingle = () => {
	const { id = "" } = useParams();
	const { back } = useRouter();

	// server state hooks
	const { data: pokemon, isLoading: isPokemonLoading } = useSinglePokemonQuery(id as string);

	return (
		<div className="pokemon-single text-center py-5 min-vh-100">
			<div className="container">
				<div className="row gy-4">
					<div className="col-auto">
						<button
							type="button"
							className="btn btn-white border icon-link icon-link-hover icon-link-hover-reversed"
							onClick={() => back()}>
							<svg className="bi w-18px h-18px" width="16" height="16">
								<use href="#icon-arrow-left" />
							</svg>
							<small>Back to list</small>
						</button>
					</div>
					<div className="col-12 m-0"></div>
					<div className="col-12 col-xxl-8 mx-auto">
						<PokemonSingleCard isLoading={isPokemonLoading} pokemon={pokemon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonSingle;
