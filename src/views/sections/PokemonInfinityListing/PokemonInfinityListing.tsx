"use client";

import { usePokemonInfinityQuery } from "hooks/useTanstackQuery/usePokemon";
import { extractIdFromUrl, flattenDeep } from "utils/helpers";
import PokemonCard from "views/components/PokemonCard";

const PokemonInfinityListing = () => {
	// server state hooks
	const {
		data: { pages = [] } = {},
		isLoading,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = usePokemonInfinityQuery();

	// constants
	const pokemonList = flattenDeep(pages.map((page) => page?.results || []));

	return (
		<div className="row gy-5 justify-content-center mt-0">
			{isLoading ? (
				<>
					<div className="col-12 mt-0">
						<div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
							{Array.from({ length: 12 }).map((_, index) => (
								<div className="col" key={index}>
									<PokemonCard isLoading />
								</div>
							))}
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-6 col-xl-4">
						<button
							className="btn btn-link disabled placeholder-glow w-100"
							aria-hidden="true"
							tabIndex={-1}
							disabled>
							<strong className="placeholder placeholder-sm bg-primary w-35 mx-auto">
								&nbsp;
							</strong>
						</button>
					</div>
				</>
			) : pokemonList.length > 0 ? (
				<>
					<div className="col-12 mt-0">
						<div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
							{pokemonList.map(({ name, url }) => (
								<div className="col" key={name}>
									<PokemonCard pokemon={{ name, id: extractIdFromUrl(url) }} />
								</div>
							))}
						</div>
					</div>
					{hasNextPage && (
						<div className="col-auto">
							<button
								type="button"
								className="btn btn-link w-100 hstack gap-2 flex-nowrap justify-content-center text-decoration-none"
								onClick={() => fetchNextPage()}
								disabled={isFetchingNextPage}>
								{isFetchingNextPage && (
									<span
										className="spinner-border text-success spinner-border-sm"
										role="status">
										<span className="visually-hidden">Loading</span>
									</span>
								)}
								<small>
									{isFetchingNextPage ? "Loading" : "Load more Pokémon"}
								</small>
							</button>
						</div>
					)}
				</>
			) : (
				<div className="col-12 mt-0">
					<h5 className="h4 text-center">No data found</h5>
				</div>
			)}
		</div>
	);
};

export default PokemonInfinityListing;
