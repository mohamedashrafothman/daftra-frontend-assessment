"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = { isLoading?: boolean | undefined } & ComponentPropsWithoutRef<"div">;

const PokemonCardWrapper = ({ isLoading, children }: Props) => (
	<div className={classNames("card pokemon-card h-100", { "placeholder-glow": isLoading })}>
		{children}
	</div>
);

export default PokemonCardWrapper;
