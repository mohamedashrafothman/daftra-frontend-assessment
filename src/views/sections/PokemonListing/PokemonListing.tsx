"use client";

import queryClient from "config/tanstack-query";
import {
	getPokemonQueryOptions,
	getSinglePokemonQueryOptions,
	usePokemonQuery,
} from "hooks/useTanstackQuery/usePokemon";
import { parseAsInteger, useQueryState } from "nuqs";
import { useCallback, useEffect } from "react";
import { type GetPokemonResponseType } from "services/api/pokeapi/pokemon";
import { extractIdFromUrl } from "utils/helpers";
import vars from "utils/vars";
import Pagination from "views/components/Pagination";
import PokemonCard from "views/components/PokemonCard";

const PokemonInfinityListing = () => {
	// state hooks
	const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

	// server state hooks
	const { data: pokemonData, isLoading } = usePokemonQuery({
		offset: (page - 1) * vars.pagination.limit,
	});

	// constants
	const hasPrevPage = pokemonData?.previous !== null;
	const hasNextPage = pokemonData?.next !== null;
	const pokemonList = pokemonData?.results || [];
	const totalItems = pokemonData?.count || 0;
	const totalPages = Math.ceil(totalItems / vars.pagination.limit) || 1;

	// event handlers
	const prefetchDataOnPageChange = useCallback(async () => {
		if (!hasNextPage) return;

		const getPokemonOptions = getPokemonQueryOptions({ offset: page * vars.pagination.limit });
		await queryClient.prefetchQuery(getPokemonOptions);
		const prefetchedData =
			(queryClient.getQueryState(getPokemonOptions.queryKey)
				?.data as GetPokemonResponseType) || {};

		// prefetch pokemon details
		[...(prefetchedData?.results || [])].forEach(
			async (pokemon) =>
				await queryClient.prefetchQuery(
					getSinglePokemonQueryOptions(extractIdFromUrl(pokemon.url))
				)
		);
	}, [page, hasNextPage]);

	// effect handlers
	useEffect(() => {
		prefetchDataOnPageChange();
	}, [prefetchDataOnPageChange]);

	return (
		<div className="row gy-5 justify-content-center mt-0">
			{isLoading ? (
				<div className="col-12 mt-0">
					<div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
						{Array.from({ length: 12 }).map((_, index) => (
							<div className="col" key={index}>
								<PokemonCard isLoading />
							</div>
						))}
					</div>
				</div>
			) : pokemonList.length > 0 ? (
				<div className="col-12 mt-0">
					<div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
						{pokemonList.map(({ name, url }) => (
							<div className="col" key={name}>
								<PokemonCard pokemon={{ name, id: extractIdFromUrl(url) }} />
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="col-12 mt-0">
					<h5 className="h4 text-center">No data found</h5>
				</div>
			)}
			{pokemonList.length > 0 && totalPages > 1 && (
				<div className="col-auto">
					<Pagination
						page={page}
						totalPages={totalPages}
						hasNextPage={hasNextPage}
						hasPreviousPage={hasPrevPage}
						onClick={(page) => setPage(+page)}
						disabled={isLoading}
					/>
				</div>
			)}
		</div>
	);
};

export default PokemonInfinityListing;
