<table><tr> <td colspan="1"> <h3 align="center"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://PlayForm.Cloud/Dark/Image/GitHub/Astro.svg"> <source media="(prefers-color-scheme: light)" srcset="https://PlayForm.Cloud/Image/GitHub/Astro.svg"> <img width="28" alt="Astro" src="https://PlayForm.Cloud/Image/GitHub/Astro.svg"> </picture>  </h3> </td> <td colspan="3" valign="top"> <h3 align="center"> Related </h3> </td> </tr><tr><td valign="top" colspan="1"><a href="https://GitHub.Com/PlayForm/Compress/actions/workflows/Node.yml" target="_blank"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/PlayForm/Compress/Node.yml?branch=main&label=Build&logo=node.js&color=black&labelColor=black&logoColor=white&logoWidth=0"> <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/actions/workflow/status/PlayForm/Compress/Node.yml?branch=main&label=Build&logo=node.js&color=white&labelColor=white&logoColor=black&logoWidth=0"> <img src="https://img.shields.io/github/actions/workflow/status/PlayForm/Compress/Node.yml?branch=main&label=Build&logo=node.js&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Build" title="Build"> </picture> </a><br><a href="https://NPMJS.Org/@playform/compress?activeTab=dependencies" target="_blank"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/librariesio/release/npm/@playform/compress?logo=dependabot&label=&color=black&labelColor=black&logoColor=white&logoWidth=0"> <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/librariesio/release/npm/@playform/compress?logo=dependabot&label=&color=white&labelColor=white&logoColor=black&logoWidth=0"> <img src="https://img.shields.io/librariesio/release/npm/@playform/compress?logo=dependabot&label=&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Dependency" title="Dependency"> </picture> </a><br><a href="https://NPMJS.Org/@playform/compress" target="_blank"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/@playform/compress?label=Version&logo=npm&color=black&labelColor=black&logoColor=white&logoWidth=0"> <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/npm/v/@playform/compress?label=Version&logo=npm&color=white&labelColor=white&logoColor=black&logoWidth=0"> <img src="https://img.shields.io/npm/v/@playform/compress?label=Version&logo=npm&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Version" title="Version"> </picture> </a><br></td><td valign="top" colspan="1"><a href="https://GitHub.Com/PlayForm/Compress" target="_blank"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/stars/PlayForm/Compress?style=flat&label=Star&logo=github&color=black&labelColor=black&logoColor=white&logoWidth=0"><source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/stars/PlayForm/Compress?style=flat&label=Star&logo=github&color=white&labelColor=white&logoColor=black&logoWidth=0"><img src="https://img.shields.io/github/stars/PlayForm/Compress?style=flat&label=Star&logo=github&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Star"></picture></a><br><a href="https://NPMJS.Org/@playform/compress" target="_blank"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/d18m/@playform/compress?label=Download&logo=npm&color=black&labelColor=black&logoColor=white&logoWidth=0"> <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/npm/d18m/@playform/compress?label=Download&logo=npm&color=white&labelColor=white&logoColor=black&logoWidth=0"> <img src="https://img.shields.io/npm/d18m/@playform/compress?label=Download&logo=npm&color=black&labelColor=black&logoColor=white&logoWidth=0" alt="Download" title="Download"> </picture> </a><br><a href="https://GitHub.Com/PlayForm/Compress" target="_blank"><b>Compress 🗜️</b></a></td></tr></table><hr>

# [Favicon] 🎨

This **[`Astro integration`][astro-integration]** brings favicon generation utilities
to your Astro project.

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

## Configuration

You can override any of the default options. You can see the full option
interface here:
[`Source/Interface/Integration.ts`](HTTPS://GitHub.Com/PlayForm/Favicon/blob/main/Source/Interface/Integration.ts)

### Option: `source`

The path to the source icon file (SVG).

- **Type:** `string`
- **Default:** `"Source/Asset/PlayForm.svg"`

### Option: `darkSource`

The path to the dark mode source icon file (SVG).

- **Type:** `string | undefined`
- **Default:** `"Source/Asset/Dark/PlayForm.svg"`

### Option: `path`

The output path for favicon files (relative to the public directory).

- **Type:** `string`
- **Default:** `"/"`

### Option: `settings`

Favicon generation settings. Pass `false` to disable favicon generation, or
an object with specific settings.

- **Type:** `IconSettings | boolean`
- **Default:** `{}` (uses built-in defaults)

#### `settings.desktop`

Desktop favicon settings including light and dark mode icons.

- **Type:** `DesktopSettings | boolean`
- **Default:**
```ts
{
	regularIconTransformation: {
		type: "background",
		backgroundColor: "#eaeaea",
		backgroundRadius: 0.4,
		imageScale: 0.7,
	},
	darkIconType: "specific",
	darkIconTransformation: {
		type: "background",
		backgroundColor: "#151515",
		backgroundRadius: 0.4,
		imageScale: 0.7,
	},
}
```

#### `settings.touch`

iOS touch icon settings.

- **Type:** `TouchSettings | boolean`
- **Default:**
```ts
{
	transformation: {
		type: "background",
		backgroundColor: "#eaeaea",
		backgroundRadius: 0,
		imageScale: 0.7,
	},
	appTitle: "PlayForm",
}
```

#### `settings.webAppManifest`

Web app manifest settings.

- **Type:** `WebAppManifestSettings | boolean`
- **Default:**
```ts
{
	transformation: {
		type: "background",
		backgroundColor: "#eaeaea",
		backgroundRadius: 0,
		imageScale: 0.8,
	},
	backgroundColor: "#eaeaea",
	themeColor: "#eaeaea",
	name: "PlayForm",
	shortName: "PlayForm",
}
```

### Option: `inject`

Whether to inject favicon HTML into the build output logs.

- **Type:** `boolean`
- **Default:** `true`

### Option: `logger`

Custom logger function for build output messages.

- **Type:** `(message: string) => void`
- **Default:** `console.log`

## Examples

### Custom Icons

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			source: "Source/Asset/CustomIcon.svg",
			darkSource: "Source/Asset/CustomDarkIcon.svg",
		}),
	],
};
```

### Custom Output Path

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			path: "/assets/favicons/",
		}),
	],
};
```

### Custom Settings

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("@playform/favicon")).default({
			settings: {
				desktop: {
					regularIconTransformation: {
						type: "background",
						backgroundColor: "#ffffff",
						backgroundRadius: 0.5,
						imageScale: 0.8,
					},
				},
				touch: {
					appTitle: "My App",
				},
				webAppManifest: {
					name: "My Application",
					shortName: "MyApp",
					backgroundColor: "#ffffff",
					themeColor: "#ffffff",
				},
			},
		}),
	],
};
```

[Favicon]: HTTPS://NPMJS.Org/@playform/favicon
[astro-integration]: HTTPS://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a history of changes to this integration.
