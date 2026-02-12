import { IconTransformationType } from "@realfavicongenerator/generate-favicon";
/**
 * @module Settings
 *
 * Default favicon generation settings
 */
declare const _default: {
    Desktop: {
        RegularIconTransformation: {
            Type: IconTransformationType.Background;
            BackgroundColor: string;
            BackgroundRadius: number;
            ImageScale: number;
        };
        DarkIconType: "specific";
        DarkIconTransformation: {
            Type: IconTransformationType.Background;
            BackgroundColor: string;
            BackgroundRadius: number;
            ImageScale: number;
        };
    };
    Touch: {
        Transformation: {
            Type: IconTransformationType.Background;
            BackgroundColor: string;
            BackgroundRadius: number;
            ImageScale: number;
        };
        AppTitle: string;
    };
    WebAppManifest: {
        Transformation: {
            Type: IconTransformationType.Background;
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
export default _default;
