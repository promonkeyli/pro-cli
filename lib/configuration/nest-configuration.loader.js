"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestConfigurationLoader = void 0;
const defaults_1 = require("./defaults");
/**
 * A cache table that maps some reader (by its name along with the config path)
 * to a loaded configuration.
 * This was added because several commands relies on the app's config in order
 * to generate some dynanmic content prior running the command itself.
 */
const loadedConfigsCache = new Map();
class NestConfigurationLoader {
    constructor(reader) {
        this.reader = reader;
    }
    load(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheEntryKey = `${this.reader.constructor.name}:${name}`;
            const cachedConfig = loadedConfigsCache.get(cacheEntryKey);
            if (cachedConfig) {
                return cachedConfig;
            }
            let loadedConfig;
            const content = name
                ? yield this.reader.read(name)
                : yield this.reader.readAnyOf([
                    'nest-cli.json',
                    '.nestcli.json',
                    '.nest-cli.json',
                    'nest.json',
                ]);
            if (content) {
                const fileConfig = JSON.parse(content);
                if (fileConfig.compilerOptions) {
                    loadedConfig = Object.assign(Object.assign(Object.assign({}, defaults_1.defaultConfiguration), fileConfig), { compilerOptions: Object.assign(Object.assign({}, defaults_1.defaultConfiguration.compilerOptions), fileConfig.compilerOptions) });
                }
                else {
                    loadedConfig = Object.assign(Object.assign({}, defaults_1.defaultConfiguration), fileConfig);
                }
            }
            else {
                loadedConfig = defaults_1.defaultConfiguration;
            }
            loadedConfigsCache.set(cacheEntryKey, loadedConfig);
            return loadedConfig;
        });
    }
}
exports.NestConfigurationLoader = NestConfigurationLoader;
