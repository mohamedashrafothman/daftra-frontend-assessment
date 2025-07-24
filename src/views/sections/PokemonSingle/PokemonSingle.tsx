"use client";

import useSinglePokemonQuery from "hooks/useTanstackQuery/usePokemon/useSinglePokemonQuery";
import { useParams, useRouter } from "next/navigation";

const PokemonSingle = () => {
	const { id } = useParams();
	const { back } = useRouter();

	const { data: pokemon, isLoading: isPokemonLoading } = useSinglePokemonQuery(id as string);

	if (isPokemonLoading) return <div>Loading...</div>;

	return (
		<section className="pokemon-single text-center py-5 min-vh-100">
			<div className="container">
				<div className="row gy-5">
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
					<div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xxl-8 mx-auto">
						<div className="text-bg-dark text-center p-2">
							{pokemon?.name || "Pokemon not found"}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PokemonSingle;
