"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerFactory = void 0;
const chalk = __importStar(require("chalk"));
const npm_runner_1 = require("./npm.runner");
const runner_1 = require("./runner");
const schematic_runner_1 = require("./schematic.runner");
const yarn_runner_1 = require("./yarn.runner");
const pnpm_runner_1 = require("./pnpm.runner");
class RunnerFactory {
    static create(runner) {
        switch (runner) {
            case runner_1.Runner.SCHEMATIC:
                return new schematic_runner_1.SchematicRunner();
            case runner_1.Runner.NPM:
                return new npm_runner_1.NpmRunner();
            case runner_1.Runner.YARN:
                return new yarn_runner_1.YarnRunner();
            case runner_1.Runner.PNPM:
                return new pnpm_runner_1.PnpmRunner();
            default:
                // @ts-ignore
                console.info(chalk.yellow(`[WARN] Unsupported runner: ${runner}`));
        }
    }
}
exports.RunnerFactory = RunnerFactory;
