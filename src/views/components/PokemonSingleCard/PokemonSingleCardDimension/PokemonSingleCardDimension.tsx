"use client";

import IPokemon from "interfaces/Pokemon.interface";

export const ICONS = { HEIGHT: "ruler", WEIGHT: "weight" } as const;

type Props = {
	isLoading?: boolean | undefined;
	type: string;
	unit: string;
	icon: (typeof ICONS)[keyof typeof ICONS];
	value: IPokemon["height"] | IPokemon["weight"];
};

const PokemonSingleCardDimension = (props: Props) => (
	<div className="text-bg-light py-3 px-4 vstack gap-1 text-capitalize rounded">
		<p className="text-secondary hstack gap-1 mb-0 flex-nowrap align-items-center justify-content-center white-space-nowrap">
			{props.isLoading ? (
				<small className="placeholder placeholder-sm bg-secondary w-50 mx-auto d-block">
					&nbsp;
				</small>
			) : (
				<>
					<svg className="bi w-12px h-12px flex-shrink-0" height="64px" width="64px">
						<use href={`#icon-${props.icon}`} />
					</svg>
					<small>{props.type}</small>
				</>
			)}
		</p>
		<p className="fs-5 mb-0 white-space-nowrap">
			{props.isLoading ? (
				<strong className="placeholder placeholder-sm bg-secondary w-75 mx-auto d-block">
					&nbsp;
				</strong>
			) : (
				<strong>
					{props.value} {props.unit}
				</strong>
			)}
		</p>
	</div>
);

export default PokemonSingleCardDimension;
