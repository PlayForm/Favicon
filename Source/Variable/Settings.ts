import { IconTransformationType } from "@realfavicongenerator/generate-favicon";

import type Interface from "../Interface/Option.js";

/**
 * @module Settings
 *
 * Default favicon generation settings
 */
export default {
	Desktop: {
		RegularIconTransformation: {
			Type: IconTransformationType.Background,
			BackgroundColor: "#eaeaea",
			BackgroundRadius: 0.4,
			ImageScale: 0.7,
		},
		DarkIconType: "specific",
		DarkIconTransformation: {
			Type: IconTransformationType.Background,
			BackgroundColor: "#151515",
			BackgroundRadius: 0.4,
			ImageScale: 0.7,
		},
	},
	Touch: {
		Transformation: {
			Type: IconTransformationType.Background,
			BackgroundColor: "#eaeaea",
			BackgroundRadius: 0,
			ImageScale: 0.7,
		},
		AppTitle: "PlayForm",
	},
	WebAppManifest: {
		Transformation: {
			Type: IconTransformationType.Background,
			BackgroundColor: "#eaeaea",
			BackgroundRadius: 0,
			ImageScale: 0.8,
		},
		BackgroundColor: "#eaeaea",
		ThemeColor: "#eaeaea",
		Name: "PlayForm",
		ShortName: "PlayForm",
	},
} satisfies Interface["Settings"];
