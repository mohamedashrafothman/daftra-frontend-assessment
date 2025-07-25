"use client";

import classNames from "classnames";
import { percentageCalculator } from "utils/helpers";

export const MAX = 255;
type Props = {
	isLoading?: boolean | undefined;
	title?: string | undefined;
	value?: number | undefined;
};

const PokemonSingleCardStatsWrapper = (props: Props) => (
	<div className="vstack gap-1">
		<h3 className="h6 text-uppercase mb-0">
			<small className="hstack flex-nowrap align-items-center justify-content-between">
				{props.isLoading ? (
					<>
						<span className="placeholder placeholder-sm w-25 bg-secondary d-inline-block">
							&nbsp;
						</span>
						<span className="placeholder placeholder-sm w-10 bg-secondary d-inline-block">
							&nbsp;
						</span>
					</>
				) : (
					<>
						<span>{props?.title || 0}</span>
						<span className="text-secondary">{props?.value || 0}</span>
					</>
				)}
			</small>
		</h3>
		<div
			className="progress"
			role="progressbar"
			aria-label={
				!props.isLoading ? `${props.title || ""} ${props?.value || 0} of ${MAX}` : undefined
			}
			aria-valuenow={props?.value || 0}
			aria-valuemin={0}
			aria-valuemax={MAX}>
			<div
				className={classNames("progress-bar", {
					"placeholder placeholder-sm bg-secondary": props.isLoading,
				})}
				style={{
					width: `${percentageCalculator(props.isLoading ? 100 : props?.value || 0, MAX)}%`,
				}}></div>
		</div>
	</div>
);

export default PokemonSingleCardStatsWrapper;
