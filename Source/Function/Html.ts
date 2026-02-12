import type Action from "@playform/pipe/Target/Interface/Action.js";

import type { Settings as FaviconSettings } from "../Interface/Option.js";

/**
 * @module Html
 *
 * HTML comment replacement for favicon injection
 */

const HTML_COMMENT_REGEX = /<!--\s*PlayForm\/Favicon\s*-->/i;

const FAVICON_LINK_REGEX =
	/<(?:link|meta)[^>]*(?:rel=["'](?:icon|shortcut icon|apple-touch-icon|manifest)[^"']*|name=["'](?:apple-mobile-web-app-title|msapplication-|theme-color)[^"']*)[^>]*>/gi;

/**
 * Generate favicon HTML based on settings
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @returns HTML string containing favicon links
 */
export const GenerateHtml = (
	Path: string,
	Settings?: FaviconSettings | boolean,
): string => {
	const IsSettingsObject = Settings && typeof Settings === "object";

	const TouchSettings =
		IsSettingsObject && Settings.Touch && typeof Settings.Touch === "object"
			? Settings.Touch
			: null;

	const WebAppManifestSettings =
		IsSettingsObject &&
		Settings.WebAppManifest &&
		typeof Settings.WebAppManifest === "object"
			? Settings.WebAppManifest
			: null;

	const FaviconName = WebAppManifestSettings?.Name ?? "";

	const TouchAppTitle = TouchSettings?.AppTitle ?? FaviconName;

	const ThemeColor = WebAppManifestSettings?.ThemeColor ?? "#eaeaea";

	const Links = [
		`<link rel="icon" type="image/png" href="${Path}favicon-96x96.png" sizes="96x96" />`,
		`<link rel="icon" type="image/svg+xml" href="${Path}favicon.svg" />`,
		`<link rel="shortcut icon" href="${Path}favicon.ico" />`,
		`<link rel="apple-touch-icon" sizes="180x180" href="${Path}apple-touch-icon.png" />`,
	];

	const MetaTags = [
		`<meta name="theme-color" content="${ThemeColor}" />`,
		`<meta name="mobile-web-app-capable" content="yes" />`,
		`<meta name="apple-mobile-web-app-capable" content="yes" />`,
		`<meta name="apple-mobile-web app-status-bar-style" content="default" />`,
	];

	if (TouchAppTitle) {
		MetaTags.push(
			`<meta name="apple-mobile-web-app-title" content="${TouchAppTitle}" />`,
		);
	}

	MetaTags.push(
		`<meta name="msapplication-TileColor" content="${ThemeColor}" />`,
	);
	MetaTags.push(
		`<meta name="msapplication-TileImage" content="${Path}mstile-144x144.png" />`,
	);
	MetaTags.push(
		`<meta name="msapplication-config" content="${Path}browserconfig.xml" />`,
	);

	return `\n\t\t<!-- Favicon -->\n\t\t${Links.join("\n\t\t")}\n\t\t${MetaTags.join("\n\t\t")}\n\t\t`;
};

/**
 * Generate favicon HTML based on settings with cache busting
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @param BustURL - Whether to bust cache on all URLs
 * @returns HTML string containing favicon links with cache busting
 */
export const GenerateHtmlWithCacheBusting = (
	Path: string,
	Settings?: FaviconSettings | boolean,
	BustURL: boolean = true,
): string => {
	const IsSettingsObject = Settings && typeof Settings === "object";

	const TouchSettings =
		IsSettingsObject && Settings.Touch && typeof Settings.Touch === "object"
			? Settings.Touch
			: null;

	const WebAppManifestSettings =
		IsSettingsObject &&
		Settings.WebAppManifest &&
		typeof Settings.WebAppManifest === "object"
			? Settings.WebAppManifest
			: null;

	const FaviconName = WebAppManifestSettings?.Name ?? "";

	const TouchAppTitle = TouchSettings?.AppTitle ?? FaviconName;

	const ThemeColor = WebAppManifestSettings?.ThemeColor ?? "#eaeaea";

	/**
	 * Bust the cache of a URL by adding a timestamp query parameter
	 */
	const BustUrl = (Base: string): string =>
		BustURL
			? `${Base}${Base.includes("?") ? "&" : "?"}Time=${encodeURIComponent(Date.now())}`
			: Base;

	/**
	 * Create link element with optional cache busting
	 */
	const CreateLink = (
		Rel: string,
		Href: string,
		Type?: string,
		Sizes?: string,
	): string => {
		const BustedHref = BustUrl(Href);
		const Attributes: string[] = [`rel="${Rel}"`, `href="${BustedHref}"`];

		if (Type) {
			Attributes.push(`type="${Type}"`);
		}

		if (Sizes) {
			Attributes.push(`sizes="${Sizes}"`);
		}

		return `<link ${Attributes.join(" ")} />`;
	};

	const Links = [
		CreateLink("icon", `${Path}favicon-96x96.png`, "image/png", "96x96"),
		CreateLink("icon", `${Path}favicon.svg`, "image/svg+xml"),
		CreateLink("shortcut icon", `${Path}favicon.ico`),
		CreateLink(
			"apple-touch-icon",
			`${Path}apple-touch-icon.png`,
			undefined,
			"180x180",
		),
	];

	const MetaTags = [
		`<meta name="theme-color" content="${ThemeColor}" />`,
		`<meta name="mobile-web-app-capable" content="yes" />`,
		`<meta name="apple-mobile-web-app-capable" content="yes" />`,
		`<meta name="apple-mobile-web app-status-bar-style" content="default" />`,
	];

	if (TouchAppTitle) {
		MetaTags.push(
			`<meta name="apple-mobile-web-app-title" content="${TouchAppTitle}" />`,
		);
	}

	MetaTags.push(
		`<meta name="msapplication-TileColor" content="${ThemeColor}" />`,
	);
	MetaTags.push(
		`<meta name="msapplication-TileImage" content="${BustUrl(`${Path}mstile-144x144.png`)}" />`,
	);
	MetaTags.push(
		`<meta name="msapplication-config" content="${BustUrl(`${Path}browserconfig.xml`)}" />`,
	);

	return `\n\t\t<!-- Favicon -->\n\t\t${Links.join("\n\t\t")}\n\t\t${MetaTags.join("\n\t\t")}\n\t\t`;
};

/**
 * Create action for HTML post-processing with favicon injection
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @returns Action object for @playform/pipe
 */
export const CreateAction = (
	Path: string,
	Settings?: FaviconSettings | boolean,
): Action => {
	const FaviconHtml = GenerateHtml(Path, Settings);

	return {
		Wrote: async ({ Buffer, Input }) => {
			if (!Input.endsWith(".html") && !Input.endsWith(".htm")) {
				return Buffer;
			}

			const Content = Buffer.toString();

			const HasComment = HTML_COMMENT_REGEX.test(Content);

			if (HasComment) {
				return Content.replace(HTML_COMMENT_REGEX, FaviconHtml);
			}

			// Remove existing favicon links and add new ones
			const WithoutExistingFavicons = Content.replace(
				FAVICON_LINK_REGEX,
				"",
			);

			// Insert after <head> or before </head>
			const HeadStartRegex = /<head>/i;

			if (HeadStartRegex.test(WithoutExistingFavicons)) {
				return WithoutExistingFavicons.replace(
					/<head>/i,
					`<head>${FaviconHtml}`,
				);
			}

			const HeadEndRegex = /<\/head>/i;

			if (HeadEndRegex.test(WithoutExistingFavicons)) {
				return WithoutExistingFavicons.replace(
					/<\/head>/i,
					`${FaviconHtml}\n\t</head>`,
				);
			}

			return Buffer;
		},

		Fulfilled: async ({ File }) =>
			File > 0
				? `✓ Successfully processed favicon HTML in ${File} file${
						File !== 1 ? "s" : ""
					}.`
				: false,
	} satisfies Action;
};

/**
 * Create action for HTML post-processing with favicon injection and cache busting
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @param BustURL - Whether to bust cache on all URLs
 * @returns Action object for @playform/pipe
 */
export const CreateActionWithCacheBusting = (
	Path: string,
	Settings?: FaviconSettings | boolean,
	BustURL: boolean = true,
): Action => {
	const FaviconHtml = GenerateHtmlWithCacheBusting(Path, Settings, BustURL);

	return {
		Wrote: async ({ Buffer, Input }) => {
			if (!Input.endsWith(".html") && !Input.endsWith(".htm")) {
				return Buffer;
			}

			const Content = Buffer.toString();

			const HasComment = HTML_COMMENT_REGEX.test(Content);

			if (HasComment) {
				return Content.replace(HTML_COMMENT_REGEX, FaviconHtml);
			}

			// Remove existing favicon links and add new ones
			const WithoutExistingFavicons = Content.replace(
				FAVICON_LINK_REGEX,
				"",
			);

			// Insert after <head> or before </head>
			const HeadStartRegex = /<head>/i;

			if (HeadStartRegex.test(WithoutExistingFavicons)) {
				return WithoutExistingFavicons.replace(
					/<head>/i,
					`<head>${FaviconHtml}`,
				);
			}

			const HeadEndRegex = /<\/head>/i;

			if (HeadEndRegex.test(WithoutExistingFavicons)) {
				return WithoutExistingFavicons.replace(
					/<\/head>/i,
					`${FaviconHtml}\n\t</head>`,
				);
			}

			return Buffer;
		},

		Fulfilled: async ({ File }) =>
			File > 0
				? `✓ Successfully processed favicon HTML in ${File} file${
						File !== 1 ? "s" : ""
					}.`
				: false,
	} satisfies Action;
};
