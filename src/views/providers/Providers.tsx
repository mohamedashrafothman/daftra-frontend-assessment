"use client";

import { type DehydratedState } from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { Slide, ToastContainer } from "react-toastify";
import { default as AxiosProvider } from "views/providers/Axios";
import { default as NuqsProvider } from "views/providers/Nuqs";
import { default as ReactQueryProvider } from "views/providers/ReactQuery";

type Props = {
	children?: ReactNode | undefined;
	hydrationBoundaryState: DehydratedState;
};

const Providers = ({ children, hydrationBoundaryState }: Props) => (
	<ReactQueryProvider state={hydrationBoundaryState}>
		<AxiosProvider>
			<NextTopLoader color="var(--primary)" />
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				theme="dark"
				transition={Slide}
				closeButton={false}
				pauseOnHover
				hideProgressBar
				closeOnClick
			/>
			<NuqsProvider>{children}</NuqsProvider>
		</AxiosProvider>
	</ReactQueryProvider>
);

export default Providers;
