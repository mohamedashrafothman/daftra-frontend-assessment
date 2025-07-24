import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "stylesheets/styles.scss";
import Providers from "views/providers";
import SVGs from "views/sections/SVGs/SVGs";

export const metadata: Metadata = {
	title: { default: "Pokedex", template: "%s | Pokedex" },
	description: "Description example...",
};

type Props = { children: ReactNode };

const layout = async ({ children }: Props) => {
	const queryClient = new QueryClient();

	return (
		<html lang="en" dir="ltr">
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<SVGs />
				<div id="app">
					<Providers hydrationBoundaryState={dehydrate(queryClient)}>
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
};

export default layout;
