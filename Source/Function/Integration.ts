import type {
	FaviconSettings,
	MasterIcon,
} from "@realfavicongenerator/generate-favicon";

import type Interface from "../Interface/Integration.js";
import type Option from "../Interface/Option.js";

/**
 * @module Integration
 *
 */

/** System path string exported for use by other modules */
export let System: string;

/** Public directory path */
let PublicDirectory: string;

/** Source directory path */
let SourceDirectory: string;

/** Default options imported from Variable/Option */
export const { default: Default } = await import("@Variable/Option.js");

/** Merge function for combining options */
export const { default: Merge } = await import("@Function/Merge.js");

/**
 * Main integration function
 * @param _Option - Optional configuration options
 * @returns AstroIntegration instance
 */
export default ((...[_Option = {}]) => {
	Object.entries(_Option).forEach(([Key, Value]) =>
		Object.defineProperty(_Option, Key, {
			value:
				Value === true
					? Default[Key as keyof typeof Default]
					: _Option[Key as keyof typeof _Option],
		}),
	);

	const Option = Merge(Default, _Option) as Option;

	const Source = Option.Source;

	const DarkSource = Option.DarkSource;

	const Path = Option.Path;

	const Settings = Option.Settings;

	const Inject = Option.Inject;

	const Logger = Option.Logger;

	const InjectHtml = Option.InjectHtml;

	const OutDirectory = System;

	return {
		name: "@playform/favicon",

		hooks: {
			"astro:config:done": async ({
				config: {
					root: { pathname: RootPathname },
					publicDir: { pathname: PublicDirPathname },
					outDir: { pathname: OutDirPathname },
				},
			}) => {
				PublicDirectory = PublicDirPathname;

				SourceDirectory = (await import("node:path"))
					.resolve(RootPathname, "..")
					.replace(/\\/g, "/");

				System = (await import("node:path"))
					.parse(OutDirPathname)
					.dir.replace(/\\/g, "/");

				if (System.startsWith("/")) {
					System = System.substring(1);
				}
			},

			"astro:build:done": async () => {
				if (!Settings || typeof Settings === "boolean") {
					Logger(
						"⚠️ Favicon settings not provided. Skipping favicon generation.",
					);
					return;
				}

				const LoadAndConvertToSvg = (
					await import("@realfavicongenerator/image-adapter-node")
				).loadAndConvertToSvg;

				const RegularIconPath = resolve(SourceDirectory, Source);

				let DarkIconPath: string | undefined;

				if (DarkSource) {
					DarkIconPath = resolve(SourceDirectory, DarkSource);
				}

				const Icon = await LoadAndConvertToSvg(RegularIconPath);

				let MasterIcon: MasterIcon = {
					icon: Icon,
				};

				if (DarkIconPath) {
					const DarkIcon = await LoadAndConvertToSvg(DarkIconPath);
					MasterIcon = {
						icon: Icon,
						darkIcon: DarkIcon,
					};
				}

				const IconSettings = Settings as Option["Settings"];

				let DesktopSettings:
					| undefined
					| NonNullable<FaviconSettings["icon"]["desktop"]>;

				if (
					IconSettings.Desktop &&
					typeof IconSettings.Desktop === "object"
				) {
					DesktopSettings = IconSettings.Desktop as NonNullable<
						FaviconSettings["icon"]["desktop"]
					>;
				}

				let TouchSettings:
					| undefined
					| NonNullable<FaviconSettings["icon"]["touch"]>;

				if (
					IconSettings.Touch &&
					typeof IconSettings.Touch === "object"
				) {
					TouchSettings = IconSettings.Touch as NonNullable<
						FaviconSettings["icon"]["touch"]
					>;
				}

				let WebAppManifestSettings:
					| undefined
					| NonNullable<FaviconSettings["icon"]["webAppManifest"]>;

				if (
					IconSettings.WebAppManifest &&
					typeof IconSettings.WebAppManifest === "object"
				) {
					WebAppManifestSettings =
						IconSettings.WebAppManifest as NonNullable<
							FaviconSettings["icon"]["webAppManifest"]
						>;
				}

				let IconObject: FaviconSettings["icon"] =
					{} as FaviconSettings["icon"];

				if (DesktopSettings) {
					IconObject.desktop = DesktopSettings;
				}

				if (TouchSettings) {
					IconObject.touch = TouchSettings;
				}

				if (WebAppManifestSettings) {
					IconObject.webAppManifest = WebAppManifestSettings;
				}

				let FaviconSettings: FaviconSettings = {
					icon: IconObject,
					path: Path,
				};

				const FaviconDirectory = resolve(
					PublicDirectory,
					Path.replace(/^\//, ""),
				);

				try {
					await mkdir(FaviconDirectory, { recursive: true });

					const Files = await (
						await import("@realfavicongenerator/generate-favicon")
					).generateFaviconFiles(
						MasterIcon,
						FaviconSettings,
						await (
							await import("@realfavicongenerator/image-adapter-node")
						).getNodeImageAdapter(),
					);

					for (const [Filename, Content] of Object.entries(Files)) {
						const FilePath = join(FaviconDirectory, Filename);
						await writeFile(
							FilePath,
							Content as string | Uint8Array,
						);
					}

					Logger(
						`✓ Successfully generated ${Object.keys(Files).length} favicon file(s) to ${Path}`,
					);

					if (Inject) {
						const Html = await (
							await import("@realfavicongenerator/generate-favicon")
						).generateFaviconHtml(FaviconSettings);

						Logger(
							"\n📄 HTML to add to your site's head:\n" + Html,
						);
					}

					if (InjectHtml) {
						const { default: Pipe } =
							await import("@playform/pipe");
						const { CreateAction } =
							await import("@Function/Html.js");

						const HtmlDirectory = OutDirectory;

						const HtmlPath = Path.endsWith("/")
							? Path.substring(0, Path.length - 1)
							: Path;

						const HtmlAction = Merge(
							CreateAction(HtmlPath, Settings),
							{
								Logger,
							},
						);

						// Cast Pipe to any to handle incomplete type definitions
						const PipeConstructor = Pipe as any;
						await new PipeConstructor({ Logger })
							.In(HtmlDirectory)
							.By("**/*.html")
							.Not("**/*.min.html")
							.Pipe(HtmlAction);

						Logger(
							"✓ Successfully injected favicon HTML into HTML files.",
						);
					}
				} catch (_Error: unknown) {
					const ErrorMessage =
						(_Error as { message?: string }).message ??
						String(_Error);

					Logger(`✗ Failed to generate favicons: ${ErrorMessage}`);
				}
			},
		},
	};
}) satisfies Interface;

export const { resolve, join } = await import("node:path");

export const { mkdir, writeFile } = await import("node:fs/promises");
