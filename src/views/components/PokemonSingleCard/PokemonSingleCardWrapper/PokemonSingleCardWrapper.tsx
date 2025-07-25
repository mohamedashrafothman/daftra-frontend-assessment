"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = { isLoading?: boolean | undefined } & ComponentPropsWithoutRef<"div">;

const PokemonSingleCardWrapper = ({ isLoading, children }: Props) => (
	<article className={classNames("card pokemon-single-card", { "placeholder-glow": isLoading })}>
		{children}
	</article>
);

export default PokemonSingleCardWrapper;
