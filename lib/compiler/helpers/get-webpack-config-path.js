"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebpackConfigPath = void 0;
const get_value_or_default_1 = require("./get-value-or-default");
/**
 * Returns the path to the webpack configuration file to use for the given application.
 * @param configuration Configuration object.
 * @param cmdOptions Command line options.
 * @param appName Application name.
 * @returns The path to the webpack configuration file to use.
 */
function getWebpackConfigPath(configuration, cmdOptions, appName) {
    var _a;
    let webpackPath = (0, get_value_or_default_1.getValueOrDefault)(configuration, 'compilerOptions.webpackConfigPath', appName, 'webpackPath', cmdOptions);
    if (webpackPath) {
        return webpackPath;
    }
    const builder = (0, get_value_or_default_1.getValueOrDefault)(configuration, 'compilerOptions.builder', appName);
    webpackPath =
        typeof builder === 'object' && (builder === null || builder === void 0 ? void 0 : builder.type) === 'webpack'
            ? (_a = builder.options) === null || _a === void 0 ? void 0 : _a.configPath
            : undefined;
    return webpackPath;
}
exports.getWebpackConfigPath = getWebpackConfigPath;
