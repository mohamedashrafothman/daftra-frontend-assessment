"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"div">;

const PokemonSingleCardTypesList = ({ children }: Props) => (
	<div className="hstack gap-2">{children}</div>
);

export default PokemonSingleCardTypesList;
