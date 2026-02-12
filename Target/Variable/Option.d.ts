/**
 * @module Option
 *
 * Default configuration options for the Favicon integration
 */
declare const _default: {
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
export default _default;
