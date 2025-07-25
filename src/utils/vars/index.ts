import { type RawAxiosRequestHeaders } from "axios";

export type varsTypes = {
	isProduction: boolean;
	isDevelopment: boolean;
	app: {
		baseUrl: string;
		name: string;
	};
	api: { headers: Pick<RawAxiosRequestHeaders, "Accept" | "Content-Type"> };
	pagination: { limit: number };
};

export const vars: varsTypes = {
	isProduction: process.env.NODE_ENV === "production",
	isDevelopment: process.env.NODE_ENV === "development",
	app: {
		baseUrl: `${process.env.NEXT_PUBLIC_API_URL || ""}/api`,
		name: process.env.NEXT_PUBLIC_NAME || "",
	},
	api: { headers: { Accept: "application/json", "Content-Type": "application/json" } },
	pagination: { limit: 12 },
};

export default vars;
