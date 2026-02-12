/**
 * @module Merge
 *
 * Custom merge function for combining options
 */
export default (await import("deepmerge-ts")).deepmergeCustom({
	mergeArrays: false,
});
