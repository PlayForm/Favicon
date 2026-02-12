<table><tr> <td colspan="1"> <h3 align="center"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://PlayForm.Cloud/Dark/Image/GitHub/Astro.svg"> <source media="(prefers-color-scheme: light)" srcset="https://PlayForm.Cloud/Image/GitHub/Astro.svg"> <img width="28" alt="Astro" src="https://PlayForm.Cloud/Image/GitHub/Astro.svg"> </picture>  </h3> </td> <td colspan="3" valign="top"> <h3 align="center"> Related </h3> </td> </tr><tr><td valign="top" colspan="1"><a href="https://GitHub.Com/PlayForm/Favicon/actions/workflows/Node.yml" target="_blank"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/PlayForm/Favicon/Node.yml?branch=main&label=Build&logo=node.js&color=black&labelColor=black&logoColor=white&logoWidth=0"> <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/actions/workflow/status/PlayForm/Favicon/Node.yml?branch=main&label=Build&logo=node.js&color=white&labelColor=white&logoColor=black&logoWidth=0"> <img src="https://img.shields.io/github/actions/workflow/status/PlayForm/Favicon/Node.yml?branch=main&label=Build&logo=node.js&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Build" title="Build"> </picture> </a><br><a href="https://NPMJS.Org/@playform/favicon?activeTab=dependencies" target="_blank"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/librariesio/release/npm/@playform/favicon?logo=dependabot&label=&color=black&labelColor=black&logoColor=white&logoWidth=0"> <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/librariesio/release/npm/@playform/favicon?logo=dependabot&label=&color=white&labelColor=white&logoColor=black&logoWidth=0"> <img src="https://img.shields.io/librariesio/release/npm/@playform/favicon?logo=dependabot&label=&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Dependency" title="Dependency"> </picture> </a><br><a href="h...

# [Favicon] 🎨

This **[`Astro integration`][astro-integration]** brings favicon generation
utilities to your Astro project.

Powered by [`@realfavicongenerator/generate-favicon`][realfavicongenerator] 🎁

Automatically generates comprehensive favicon sets during build, including:

- Desktop icons (regular and dark mode)
- iOS touch icons
- Web app manifest
- Android icons
- Windows tile icons
- And more...

> **Note**
>
> `Favicon` generates static favicon files during the Astro build phase.

> [!IMPORTANT]
>
> Place the `Favicon` component in your layout or individual pages' `<head>`
> section to include the generated favicon links in your HTML.

## Installation 🚀

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `Favicon`, run the following from your project directory and follow
the prompts:

Using NPM:

```sh
npx astro add @playform/favicon
```

Using Yarn:

```sh
yarn astro add @playform/favicon
```

Using PNPM:

```sh
pnpx astro add @playform/favicon
```

### Install dependencies manually

First, install the `Favicon` integration like so:

```sh
npm install -D -E @playform/favicon
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
export default {
	integrations: [(await import("@playform/favicon")).default()],
};
```

## Getting started

The integration will now automatically generate favicon files during the build
process using the default settings.

Default settings include:

- Desktop icons with light/dark mode support
- iOS touch icons
- Web app manifest
- Output to the root of your public directory

Add the [`Favicon` component](#component-usage) to your layout to include the
generated favicon links in your HTML.

## Usage

### Component Usage

You can use the [`Favicon` component](./Source/Component/Favicon.astro) directly
in your Astro layouts or pages.

**`src/layouts/Layout.astro`**

```astro
---
import Favicon from "@playform/favicon/Favicon";
---

<html>
	<head>
		<Favicon />
	</head>
	<body>
		<slot />
	</body>
</html>
```

#### Component Props

| Prop       | Type                  | Default     | Description                                   |
| ---------- | --------------------- | ----------- | --------------------------------------------- |
| `Path`     | `string`              | `"/"`       | The base path where favicon files are located |
| `Settings` | `Settings \| boolean` | `undefined` | Favicon generation settings (optional)        |
| `Meta`     | `boolean`             | `true`      | Whether to include all meta tags              |
| `AppTitle` | `string`              | `undefined` | Application title for mobile web app          |
| `BustURL`  | `boolean`             | `true`      | Whether to bust cache on all favicon URLs     |

#### Component Examples

**Custom Path**

```astro
<Favicon Path="/assets/icons/" />
```

**Disable Meta Tags**

```astro
<Favicon Meta={false} />
```

**Custom App Title**

```astro
<Favicon AppTitle="My Application" />
```

**Disable Cache Busting**

```astro
<Favicon BustURL={false} />
```

### Integration Usage

The integration generates favicon files during build time and can optionally
inject HTML directly into your built HTML files.

#### Integration Options

| Option       | Type                        | Default                            | Description                                                  |
| ------------ | --------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| `Source`     | `string`                    | `"Source/Asset/PlayForm.svg"`      | Path to the source icon file (SVG)                           |
| `DarkSource` | `string`                    | `"Source/Asset/Dark/PlayForm.svg"` | Path to the dark mode source icon file (SVG)                 |
| `Path`       | `string`                    | `"/"`                              | Output path for favicon files (relative to public directory) |
| `Settings`   | `Settings`                  | Built-in defaults                  | Favicon generation settings                                  |
| `Inject`     | `boolean`                   | `true`                             | Whether to output favicon HTML to build logs                 |
| `InjectHtml` | `boolean`                   | `false`                            | Whether to inject favicon HTML into built HTML files         |
| `BustURL`    | `boolean`                   | `false`                            | Whether to bust cache on all favicon URLs                    |
| `Logger`     | `(message: string) => void` | `console.log`                      | Custom logger function                                       |

#### Settings Interface

The `Settings` object contains nested configuration for different icon types:

```ts
interface Settings {
	Desktop?: DesktopSettings | boolean;
	Touch?: TouchSettings | boolean;
	WebAppManifest?: WebAppManifestSettings | boolean;
}
```

**Settings can be set to `false` to disable generation of that icon type.**

##### Transformation Settings

All icon types support transformation settings:

| Property           | Type                     | Default             | Description                                          |
| ------------------ | ------------------------ | ------------------- | ---------------------------------------------------- |
| `Type`             | `IconTransformationType` | -                   | Icon transformation type (from RealFaviconGenerator) |
| `BackgroundColor`  | `string`                 | Depends on settings | Background color                                     |
| `BackgroundRadius` | `number`                 | Depends on settings | Background radius for rounded icons                  |
| `ImageScale`       | `number`                 | Depends on settings | Scale of the icon within the canvas                  |

##### Desktop Settings

```ts
interface DesktopSettings {
	RegularIconTransformation?: TransformationSettings;
	DarkIconType?: "auto" | "specific";
	DarkIconTransformation?: TransformationSettings;
}
```

**Default Desktop Settings:**

```ts
{
	RegularIconTransformation: {
		Type: "background",
		BackgroundColor: "#eaeaea",
		BackgroundRadius: 0.4,
		ImageScale: 0.7,
	},
	DarkIconType: "specific",
	DarkIconTransformation: {
		Type: "background",
		BackgroundColor: "#151515",
		BackgroundRadius: 0.4,
		ImageScale: 0.7,
	},
}
```

##### Touch Settings

```ts
interface TouchSettings {
	Transformation?: TransformationSettings;
	AppTitle?: string;
}
```

**Default Touch Settings:**

```ts
{
	Transformation: {
		Type: "background",
		BackgroundColor: "#eaeaea",
		BackgroundRadius: 0,
		ImageScale: 0.7,
	},
	AppTitle: "PlayForm",
}
```

##### Web App Manifest Settings

```ts
interface WebAppManifestSettings {
	Transformation?: TransformationSettings;
	BackgroundColor?: string;
	ThemeColor?: string;
	Name?: string;
	ShortName?: string;
	Display?: string;
	StartUrl?: string;
}
```

**Default Web App Manifest Settings:**

```ts
{
	Transformation: {
		Type: "background",
		BackgroundColor: "#eaeaea",
		BackgroundRadius: 0,
		ImageScale: 0.8,
	},
	BackgroundColor: "#eaeaea",
	ThemeColor: "#eaeaea",
	Name: "PlayForm",
	ShortName: "PlayForm",
}
```

#### Integration Examples

**Custom Icons**

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			Source: "Source/Asset/CustomIcon.svg",
			DarkSource: "Source/Asset/CustomDarkIcon.svg",
		}),
	],
};
```

**Custom Output Path**

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			Path: "/assets/favicons/",
		}),
	],
};
```

**Disable Favicon Generation**

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			Settings: false,
		}),
	],
};
```

**Custom Settings**

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			Settings: {
				Desktop: {
					RegularIconTransformation: {
						Type: "background",
						BackgroundColor: "#ffffff",
						BackgroundRadius: 0.5,
						ImageScale: 0.8,
					},
				},
				Touch: {
					AppTitle: "My App",
				},
				WebAppManifest: {
					Name: "My Application",
					ShortName: "MyApp",
					BackgroundColor: "#ffffff",
					ThemeColor: "#ffffff",
				},
			},
		}),
	],
};
```

## Features

### Cache Busting

Cache busting adds a timestamp query parameter to all favicon URLs to ensure
browsers fetch updated files during development and rebuilds.

**Enable in Component:**

```astro
<Favicon BustURL={true} />
```

**Enable in Integration:**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			BustURL: true,
		}),
	],
};
```

Cache busting adds `?Time=<timestamp>` to all URLs:

```html
<link href="/favicon.ico?Time=1234567890" rel="icon" />
```

### HTML Comment Replacement

When `InjectHtml` is enabled, the integration will inject favicon HTML into your
built HTML files by replacing comments or modifying the `<head>` section.

**Add a comment in your HTML:**

```html
<!DOCTYPE html>
<html>
	<head>
		<!-- PlayForm/Favicon -->
	</head>
	<body>
		<!-- Your content -->
	</body>
</html>
```

**Enable HTML Injection:**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			InjectHtml: true,
		}),
	],
};
```

The integration will:

1. Look for `<!-- PlayForm/Favicon -->` comments and replace them
2. Remove existing favicon links if the comment is not found
3. Insert new favicon links after `<head>` or before `</head>`

**HTML Injection Options:**

- Skips `*.min.html` files
- Processes all other `*.html` and `*.htm` files
- Injects into built files only (not during development)

### Generated Favicon Files

The integration generates the following favicon files:

| File                               | Size    | Usage                     |
| ---------------------------------- | ------- | ------------------------- |
| `favicon.ico`                      | Various | Main favicon for browsers |
| `favicon.svg`                      | Vector  | Modern SVG favicon        |
| `favicon-96x96.png`                | 96x96   | Scalable PNG favicon      |
| `apple-touch-icon.png`             | 180x180 | iOS touch icon            |
| `apple-touch-icon-precomposed.png` | 180x180 | iOS < 6 support           |
| `mstile-144x144.png`               | 144x144 | Windows tile              |
| `browserconfig.xml`                | -       | Windows browser config    |
| `manifest.json`                    | -       | Web app manifest          |

### Custom Logging

You can provide a custom logger function to control build output:

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			Logger: (message) => {
				// Custom logging logic
				if (message.includes("✓")) {
					console.info(message);
				}
			},
		}),
	],
};
```

Or disable output entirely:

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			Logger: () => {},
		}),
	],
};
```

### Output HTML

When `Inject: true` (default), the integration will output the generated HTML to
the build logs.

Example output:

```
📄 HTML to add to your site's head:
		<!-- Favicon -->
		<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<link rel="shortcut icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<meta name="theme-color" content="#eaeaea" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="default" />
		<meta name="apple-mobile-web-app-title" content="PlayForm" />
		<meta name="msapplication-TileColor" content="#eaeaea" />
		<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
		<meta name="msapplication-config" content="/browserconfig.xml" />
```

[Favicon]: HTTPS://NPMJS.Org/@playform/favicon
[astro-integration]: HTTPS://docs.astro.build/en/guides/integrations-guide/
[realfavicongenerator]: HTTPS://NPMJS.Org/@realfavicongenerator/generate-favicon

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a history of changes to this integration.
