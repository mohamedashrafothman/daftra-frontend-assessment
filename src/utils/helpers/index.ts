export * from "./server";

type DeepArray<T> = T | DeepArray<T>[];

export const isFunction = (value: unknown): value is (...args: any[]) => any =>
	typeof value === "function";

export const flattenDeep = <T>(arr: DeepArray<T>): T[] => {
	return Array.isArray(arr)
		? arr.reduce<T[]>((acc, val) => acc.concat(flattenDeep(val)), [])
		: [arr];
};

export const extractIdFromUrl = (url: string): string => {
	const urlPathname = new URL(url).pathname;
	const segments = urlPathname.split("/").filter(Boolean);
	return segments[segments.length - 1];
};
