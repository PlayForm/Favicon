/**
 * @module BustUrl
 *
 * Cache busting utility for favicon URLs to ensure browser cache is invalidated during rebuilds
 */

/**
 * Bust the cache of a URL by adding a timestamp query parameter
 * @param Base - The base URL to bust
 * @returns The URL with cache busting parameter added
 */
export const BustUrl = (Base: string): string =>
	`${Base}${Base.includes("?") ? "&" : "?"}Time=${encodeURIComponent(Date.now())}`;
