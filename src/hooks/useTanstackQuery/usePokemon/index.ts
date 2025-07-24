import usePokemonInfinityQuery from "./usePokemonInfinityQuery";
import usePokemonQuery from "./usePokemonQuery";
import useSinglePokemonQuery from "./useSinglePokemonQuery";

export const ALL_KEY_ARRAY = ["pokemon"] as const;
export const INFINITY_KEY_ARRAY = [...ALL_KEY_ARRAY, "infinity"] as const;
export const SINGLE_KEY_ARRAY = [...ALL_KEY_ARRAY, "single"] as const;

export { usePokemonInfinityQuery, usePokemonQuery, useSinglePokemonQuery };
