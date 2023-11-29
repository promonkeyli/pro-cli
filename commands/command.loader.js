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
exports.CommandLoader = void 0;
const generate_command_1 = require("./generate.command");
const actions_1 = require("../actions");
// 命令行加载
class CommandLoader {
    static load(program) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new generate_command_1.GenerateCommand(new actions_1.GenerateAction()).load(program);
        });
    }
}
exports.CommandLoader = CommandLoader;
