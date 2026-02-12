import type { IconTransformationType } from "@realfavicongenerator/generate-favicon";
/**
 * @module Option
 *
 * Configuration options for the Favicon integration
 */
export default interface Interface {
    /**
     * The path to the source icon file (SVG).
     * Default: "Source/Asset/PlayForm.svg"
     */
    Source: string;
    /**
     * The path to the dark mode source icon file (SVG).
     * Default: "Source/Asset/Dark/PlayForm.svg"
     */
    DarkSource: string;
    /**
     * The output path for favicon files.
     * Default: "/"
     */
    Path: string;
    /**
     * Favicon generation settings.
     * Default: {} (uses built-in defaults)
     */
    Settings: Settings;
    /**
     * Whether to inject favicon HTML into the head.
     * Default: true
     */
    Inject: boolean;
    /**
     * Whether to inject favicon HTML into HTML files using HTML comment replacement.
     * When enabled, replaces <!-- PlayForm/Favicon --> comments in HTML files with favicon links.
     * Also strips existing favicon links and adds new ones if the comment is not found.
     * Default: false
     */
    InjectHtml: boolean;
    /**
     * Whether to bust cache on all favicon URLs by adding timestamp query parameter.
     * Default: false
     */
    BustURL: boolean;
    /**
     * Custom logger function.
     */
    Logger: (Message: string) => void;
}
/**
 * Icon transformation settings
 */
export interface TransformationSettings {
    /**
     * Icon transformation type
     */
    Type: IconTransformationType;
    /**
     * Background color
     */
    BackgroundColor?: string;
    /**
     * Background radius for rounded icons
     */
    BackgroundRadius?: number;
    /**
     * Scale of the icon within the canvas
     */
    ImageScale?: number;
}
/**
 * Desktop favicon settings
 */
export interface DesktopSettings {
    /**
     * Regular icon transformation settings
     */
    RegularIconTransformation?: TransformationSettings;
    /**
     * Dark mode icon type
     */
    DarkIconType?: "auto" | "specific";
    /**
     * Dark mode icon transformation settings
     */
    DarkIconTransformation?: TransformationSettings;
}
/**
 * Touch icon settings
 */
export interface TouchSettings {
    /**
     * Touch icon transformation settings
     */
    Transformation?: TransformationSettings;
    /**
     * Application title for touch icons
     */
    AppTitle?: string;
}
/**
 * Web App Manifest settings
 */
export interface WebAppManifestSettings {
    /**
     * Manifest icon transformation settings
     */
    Transformation?: TransformationSettings;
    /**
     * Background color
     */
    BackgroundColor?: string;
    /**
     * Theme color
     */
    ThemeColor?: string;
    /**
     * Application name
     */
    Name?: string;
    /**
     * Short application name
     */
    ShortName?: string;
    /**
     * Display mode
     */
    Display?: string;
    /**
     * Start URL
     */
    StartUrl?: string;
}
/**
 * Icon settings container
 */
export interface Settings {
    /**
     * Desktop favicon settings
     */
    Desktop?: DesktopSettings | boolean;
    /**
     * Touch icon settings
     */
    Touch?: TouchSettings | boolean;
    /**
     * Web App Manifest settings
     */
    WebAppManifest?: WebAppManifestSettings | boolean;
}
