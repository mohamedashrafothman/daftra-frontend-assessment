import usePokemonInfinityQuery from "./usePokemonInfinityQuery";
import usePokemonQuery from "./usePokemonQuery";
import useSinglePokemonQuery from "./useSinglePokemonQuery";

export const ALL_KEY_ARRAY = ["pokemon"];
export const INFINITY_KEY_ARRAY = [...ALL_KEY_ARRAY, "infinity"];
export const SINGLE_KEY_ARRAY = [...ALL_KEY_ARRAY, "single"];

export { usePokemonInfinityQuery, usePokemonQuery, useSinglePokemonQuery };
