"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"section">;

const PokemonSingleCardBody = ({ children }: Props) => (
	<section className="card-body p-4">{children}</section>
);

export default PokemonSingleCardBody;
