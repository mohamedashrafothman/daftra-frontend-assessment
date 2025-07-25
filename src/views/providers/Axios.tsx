"use client";

import axiosInstance, { isAxiosCancelError, type AxiosInstance } from "config/axios";
import httpStatus from "http-status";
import { useRouter } from "next/navigation";
import { useCallback, useLayoutEffect } from "react";
import { toast } from "react-toastify";

type Props = { children?: React.ReactNode | undefined; instance?: AxiosInstance | undefined };

const Axios = ({ children, instance = axiosInstance }: Props) => {
	const { push } = useRouter();

	// event handlers
	const requestSuccessInterceptor = useCallback((request: any) => {
		// INFO: Add the request interceptor logic here...

		// Return modified request
		return request;
	}, []);

	const requestErrorInterceptor = useCallback((error: any) => Promise.reject(error), []);

	const responseSuccessInterceptor = useCallback((response: any) => {
		// INFO: Add the response success interceptor logic here...

		// Extract response data.
		const { data: { message = null } = {} } = response;

		// Handle flash messages
		if (message) toast.success(message);

		return response;
	}, []);

	const responseErrorInterceptor = useCallback(
		async (responseError: any = {}) => {
			// INFO: Add the response error interceptor logic here...

			// Ignore axios cancel errors
			if (isAxiosCancelError(responseError)) return Promise.reject(responseError);

			// Extract error response data.
			const { response: { data: { message = null, error } = {}, status } = {} } =
				responseError;

			// Handle flash messages
			if (error?.message || message) toast.error(error?.message || message);

			// Handling 404 status code error.
			if (status === httpStatus.NOT_FOUND) push("/not-found");

			// Return rejected promise
			return Promise.reject(responseError);
		},
		[push]
	);

	// layout effects
	useLayoutEffect(() => {
		// add request interceptors
		const requestInterceptor = instance.interceptors.request.use(
			requestSuccessInterceptor,
			requestErrorInterceptor
		);

		// clean up request interceptors
		return () => {
			instance.interceptors.request.eject(requestInterceptor);
		};
	}, [instance.interceptors.request, requestErrorInterceptor, requestSuccessInterceptor]);

	useLayoutEffect(() => {
		// add response interceptors
		const responseInterceptor = instance.interceptors.response.use(
			responseSuccessInterceptor,
			responseErrorInterceptor
		);

		// clean up response interceptors
		return () => {
			instance.interceptors.response.eject(responseInterceptor);
		};
	}, [instance.interceptors.response, responseErrorInterceptor, responseSuccessInterceptor]);

	return <>{children}</>;
};

export default Axios;
