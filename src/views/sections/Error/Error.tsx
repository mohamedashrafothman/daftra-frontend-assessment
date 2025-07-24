"use client";

import { isFunction } from "utils/helpers";
import NextLink from "views/components/NextLink";

type Props = {
	code?: number | undefined;
	title?: string | undefined;
	message?: string | undefined;
	reset?: () => void | undefined;
};

const Error = ({ code = 500, title = "Internal Server Error", message, reset }: Props) => (
	<div>
		<h1>
			{code} - {title}
		</h1>
		{message && (
			<p>
				<small>
					<em>{message}</em>
				</small>
			</p>
		)}
		{isFunction(reset) ? (
			<button type="button" onClick={() => reset()}>
				Try again
			</button>
		) : (
			<NextLink href="/" exact>
				<strong>Back to home!</strong>
			</NextLink>
		)}
	</div>
);

export default Error;
