import { Command } from "commander";
import { GenerateCommand } from "./generate.command";
import { GenerateAction } from "../actions";

// 命令行加载
export class CommandLoader {
    public static async load(program: Command) {
        await new GenerateCommand(new GenerateAction()).load(program);
    }
}
