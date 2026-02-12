import type { AstroIntegration } from "astro";
import type Option from "../Interface/Option.js";
/**
 * @module Integration
 *
 * Integration function interface for Favicon
 */
export default interface Interface {
    (Option?: Partial<Option>): AstroIntegration;
}
