"use client";

import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type Props = ({ isLoading: true } | { isLoading?: false | undefined; imageUrl: string }) &
	ComponentPropsWithoutRef<"img">;

const PokemonSingleCardImage = (props: Props) => (
	<div className="ratio ratio-1x1 text-bg-light rounded-circle w-75 w-sm-50 w-md-40 w-lg-50 w-xl-75 mx-auto">
		{props.isLoading ? (
			<div className="placeholder bg-secondary rounded-circle w-100 h-100">&nbsp;</div>
		) : (
			<Image
				src={props.imageUrl}
				alt=""
				className="card-img-top w-100 h-100 d-block object-fit-scale-down p-4"
				width={268}
				height={268}
				loading="lazy"
			/>
		)}
	</div>
);

export default PokemonSingleCardImage;
