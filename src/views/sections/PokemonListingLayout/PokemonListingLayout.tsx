"use client";

import { ComponentPropsWithoutRef } from "react";
import Nav from "views/components/Nav";

type Props = { message?: string | undefined } & ComponentPropsWithoutRef<"section">;

const PokemonListingLayout = ({ children, message = "Discover and explore Pokémon" }: Props) => (
	<section className="pokemon-listing text-center py-5 min-vh-100">
		<div className="container">
			<div className="row gy-3 justify-content-center">
				<div className="col-12">
					<h1 className="text-capitalize hstack gap-2 flex-nowrap justify-content-center align-items-center mb-0">
						<svg className="bi text-yellow w-24px h-24px" width="16" height="16">
							<use href="#icon-lightning" />
						</svg>
						Pokédex
					</h1>
					{message && <p className="lead m-0">{message}</p>}
				</div>
				<div className="col-auto">
					<Nav className="nav-fill nav-pills" role="menubar">
						<Nav.List className="gap-3">
							<Nav.ListItem>
								<Nav.Link
									href="/"
									className="text-capitalize rounded"
									title="Page Controls"
									exact>
									<small>page controls</small>
								</Nav.Link>
							</Nav.ListItem>
							<Nav.ListItem>
								<Nav.Link
									href="/pokemon/infinity"
									className="text-capitalize rounded"
									title="Infinity Scroll"
									exact>
									<small>infinity scroll</small>
								</Nav.Link>
							</Nav.ListItem>
						</Nav.List>
					</Nav>
				</div>
				<div className="col-12 mt-5">{children}</div>
			</div>
		</div>
	</section>
);

export default PokemonListingLayout;
