"use client";

import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type Props = ({ isLoading: true } | { isLoading?: false | undefined; imageUrl: string }) &
	ComponentPropsWithoutRef<"img">;

const PokemonCardImage = (props: Props) => (
	<div className="card-header border-0">
		<div className="ratio ratio-41x29 text-bg-light rounded">
			{props.isLoading ? (
				<div className="placeholder bg-secondary rounded w-100 h-100">&nbsp;</div>
			) : (
				<Image
					src={props?.imageUrl || ""}
					alt=""
					className="card-img-top w-100 h-100 d-block object-fit-scale-down rounded"
					width={246}
					height={174}
					loading="lazy"
				/>
			)}
		</div>
	</div>
);

export default PokemonCardImage;
