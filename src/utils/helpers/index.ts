export * from "./server";

type DeepArray<T> = T | DeepArray<T>[];

/**
 * Picks specific properties from an object and returns a new object containing those properties.
 *
 * @param {Object} object - The source object to pick properties from.
 * @param {string[]} keys - An array of keys to select from the object.
 * @throws {Error} Throws an error if the object is null or undefined.
 * @throws {Error} Throws an error if keys is not an array.
 * @throws {Error} Throws an error if a key does not exist on the object.
 * @returns {Object} A new object containing only the specified keys from the original object.
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(
	object: T,
	keys: K[]
): Pick<T, K> => {
	// Check if the object is null or undefined
	if (!object) {
		throw new Error("pick() method was called with a null or undefined object");
	}
	// Check if keys is an array
	if (!Array.isArray(keys)) {
		throw new Error("pick() method was called with a non-array as the 'keys' parameter");
	}
	// Use reduce to build a new object with the specified keys
	return keys.reduce(
		(obj, key) => {
			// Check if the key exists in the object
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				// Assign the value to the new object
				obj[key] = object[key];
			}
			return obj;
		},
		{} as Pick<T, K>
	);
};

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

export const formatNumberToNDigits = (num: number, n: number = 2): string =>
	num.toString().padStart(n, "0");

export const percentageCalculator = (min: number = 0, max: number = 100) => (min / max) * 100;
