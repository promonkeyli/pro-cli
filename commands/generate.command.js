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
exports.GenerateCommand = void 0;
const abstract_command_1 = require("./abstract.command");
class GenerateCommand extends abstract_command_1.AbstractCommand {
    load(program) {
        return __awaiter(this, void 0, void 0, function* () {
            program
                .command("generate <schematic> [name] [path]")
                .alias("g")
                .description("react 模板文件生成\n p: react页面\n c: react组件\n s: react 接口请求service文件\n ")
                .action((schematic, name, path) => __awaiter(this, void 0, void 0, function* () {
                const inputs = [];
                inputs.push({ name: "schematic", value: schematic });
                inputs.push({ name: "name", value: name });
                inputs.push({ name: "path", value: path });
                yield this.action.handle(inputs);
            }));
        });
    }
}
exports.GenerateCommand = GenerateCommand;
