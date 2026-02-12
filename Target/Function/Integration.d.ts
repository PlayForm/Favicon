import type Option from "../Interface/Option.js";
/**
 * @module Integration
 *
 */
/** System path string exported for use by other modules */
export declare let System: string;
/** Default options imported from Variable/Option */
export declare const Default: {
    Source: string;
    DarkSource: string;
    Path: string;
    Settings: {
        Desktop: {
            RegularIconTransformation: {
                Type: import("@realfavicongenerator/generate-favicon").IconTransformationType.Background;
                BackgroundColor: string;
                BackgroundRadius: number;
                ImageScale: number;
            };
            DarkIconType: "specific";
            DarkIconTransformation: {
                Type: import("@realfavicongenerator/generate-favicon").IconTransformationType.Background;
                BackgroundColor: string;
                BackgroundRadius: number;
                ImageScale: number;
            };
        };
        Touch: {
            Transformation: {
                Type: import("@realfavicongenerator/generate-favicon").IconTransformationType.Background;
                BackgroundColor: string;
                BackgroundRadius: number;
                ImageScale: number;
            };
            AppTitle: string;
        };
        WebAppManifest: {
            Transformation: {
                Type: import("@realfavicongenerator/generate-favicon").IconTransformationType.Background;
                BackgroundColor: string;
                BackgroundRadius: number;
                ImageScale: number;
            };
            BackgroundColor: string;
            ThemeColor: string;
            Name: string;
            ShortName: string;
        };
    };
    Inject: true;
    InjectHtml: false;
    BustURL: false;
    Logger: (...data: any[]) => void;
};
/** Merge function for combining options */
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
    DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
}>, Readonly<{
    key: PropertyKey;
    parents: ReadonlyArray<Readonly<Record<PropertyKey, unknown>>>;
}>>;
/**
 * Main integration function
 * @param _Option - Optional configuration options
 * @returns AstroIntegration instance
 */
declare const _default: (Option?: Partial<Option> | undefined) => {
    name: string;
    hooks: {
        "astro:config:done": ({ config: { root: { pathname: RootPathname }, publicDir: { pathname: PublicDirPathname }, outDir: { pathname: OutDirPathname }, }, }: {
            config: import("astro").AstroConfig;
            setAdapter: (adapter: import("astro").AstroAdapter) => void;
            injectTypes: (injectedType: import("astro").InjectedType) => URL;
            logger: import("astro").AstroIntegrationLogger;
            buildOutput: "static" | "server";
        }) => Promise<void>;
        "astro:build:done": () => Promise<void>;
    };
};
export default _default;
export declare const resolve: typeof import("node:path").resolve, join: typeof import("node:path").join;
export declare const mkdir: typeof import("node:fs/promises").mkdir, writeFile: typeof import("node:fs/promises").writeFile;
