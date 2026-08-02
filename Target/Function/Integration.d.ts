import type Option from "../Interface/Option.js";
/**
 * @module Integration
 *
 */
/** System path string exported for use by other modules */
export declare let System: string;
/** Default options imported from Variable/Option */
export declare const Default: any;
/** Merge function for combining options */
export declare const Merge: <Target extends object, Ts extends ReadonlyArray<unknown>>(target: Target, ...objects: Ts) => void;
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
            buildOutput: 'static' | 'server';
        }) => Promise<void>;
        "astro:build:done": () => Promise<void>;
    };
};
export default _default;
export declare const resolve: typeof import("node:path").resolve, join: typeof import("node:path").join;
export declare const mkdir: typeof import("node:fs/promises").mkdir, writeFile: typeof import("node:fs/promises").writeFile;
