"use client";

import classNames from "classnames";
import type { Ability, Ability2 } from "interfaces/Pokemon.interface";

type Props = {
	isLoading?: boolean | undefined;
	isHidden?: Ability["is_hidden"] | undefined;
	ability?: Ability2["name"] | undefined;
};

const PokemonSingleCardAbilityListItem = ({ isLoading, isHidden, ability }: Props) => (
	<p className="hstack gap-2 mb-0 align-items-center">
		<span
			className={classNames("badge text-bg-light border", {
				"text-bg-light": isHidden,
				"text-bg-white": !isHidden,
			})}>
			{isLoading ? (
				<strong className="placeholder placeholder-sm bg-secondary w-75 mx-auto d-block">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</strong>
			) : (
				<strong>{ability || ""}</strong>
			)}
		</span>
		{isHidden && (
			<span className="text-muted text-capitalize small">
				<small>(hidden)</small>
			</span>
		)}
	</p>
);

export default PokemonSingleCardAbilityListItem;
