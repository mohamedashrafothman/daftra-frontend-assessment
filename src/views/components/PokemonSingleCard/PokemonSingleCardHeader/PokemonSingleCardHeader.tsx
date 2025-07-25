"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"header">;

const PokemonSingleCardHeader = ({ children }: Props) => (
	<header className="card-header text-white border-0 text-center p-4">{children}</header>
);

export default PokemonSingleCardHeader;
