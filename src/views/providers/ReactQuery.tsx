"use client";

import {
	HydrationBoundary,
	QueryClientProvider,
	type DehydratedState,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "config/tanstack-query";
import { ReactNode } from "react";

type Props = { children?: ReactNode | undefined; state: DehydratedState };

const ReactQuery = ({ children, state }: Props) => (
	<QueryClientProvider client={queryClient}>
		<HydrationBoundary state={state}>{children}</HydrationBoundary>
		<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
	</QueryClientProvider>
);

export default ReactQuery;
