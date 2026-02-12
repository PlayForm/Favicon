import type Action from "@playform/pipe/Target/Interface/Action.js";
import type { Settings as FaviconSettings } from "../Interface/Option.js";
/**
 * Generate favicon HTML based on settings
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @returns HTML string containing favicon links
 */
export declare const GenerateHtml: (Path: string, Settings?: FaviconSettings | boolean) => string;
/**
 * Generate favicon HTML based on settings with cache busting
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @param BustURL - Whether to bust cache on all URLs
 * @returns HTML string containing favicon links with cache busting
 */
export declare const GenerateHtmlWithCacheBusting: (Path: string, Settings?: FaviconSettings | boolean, BustURL?: boolean) => string;
/**
 * Create action for HTML post-processing with favicon injection
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @returns Action object for @playform/pipe
 */
export declare const CreateAction: (Path: string, Settings?: FaviconSettings | boolean) => Action;
/**
 * Create action for HTML post-processing with favicon injection and cache busting
 * @param Path - Base path for favicon files
 * @param Settings - Favicon settings
 * @param BustURL - Whether to bust cache on all URLs
 * @returns Action object for @playform/pipe
 */
export declare const CreateActionWithCacheBusting: (Path: string, Settings?: FaviconSettings | boolean, BustURL?: boolean) => Action;
