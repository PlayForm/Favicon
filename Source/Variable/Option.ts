import type Interface from "../Interface/Option.js";

/**
 * @module Option
 *
 * Default configuration options for the Favicon integration
 */
export default {
	Source: "Source/Asset/PlayForm.svg",

	DarkSource: "Source/Asset/Dark/PlayForm.svg",

	Path: "/",

	Settings: (await import("@Variable/Settings.js")).default,

	Inject: true,

	InjectHtml: false,

	BustURL: false,

	Logger: console.log,
} satisfies Interface;
