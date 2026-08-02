/**
 * @module Option
 *
 * Default configuration options for the Favicon integration
 */
declare const _default: {
    Source: string;
    DarkSource: string;
    Path: string;
    Settings: any;
    Inject: true;
    InjectHtml: false;
    BustURL: false;
    Logger: (...data: any[]) => void;
};
export default _default;
