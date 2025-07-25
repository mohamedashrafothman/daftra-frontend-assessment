"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"div">;

const PokemonCardWrapper = ({ children }: Props) => (
	<div className="card-body text-center pt-0">{children}</div>
);

export default PokemonCardWrapper;
