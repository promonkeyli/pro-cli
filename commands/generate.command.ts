import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";
import { Input } from "./command.input";

export class GenerateCommand extends AbstractCommand {
    public async load(program: Command): Promise<void> {
        program
            .command("generate <schematic> [name] [path]")
            .alias("g")
            .description("react 模板文件生成\n p: react页面\n c: react组件\n s: react 接口请求service文件\n ")
            .action(async (schematic: string, name: string, path: string) => {
                const inputs: Input[] = [];
                inputs.push({ name: "schematic", value: schematic });
                inputs.push({ name: "name", value: name });
                inputs.push({ name: "path", value: path });
                await this.action.handle(inputs);
            });
    }
}
