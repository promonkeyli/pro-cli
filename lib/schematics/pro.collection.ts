import { AbstractRunner } from "../runners";
import { AbstractCollection } from "./abstract.collection";
import { SchematicOption } from "./schematic.option";

export interface Schematic {
    name: string;
    alias: string;
    description: string;
}

export class ProCollection extends AbstractCollection {
    private static schematics: Schematic[] = [
        {
            name: "page",
            alias: "p",
            description: "react 模板页面生成",
        },
        {
            name: "component",
            alias: "c",
            description: "react 组件页面生成",
        },
        {
            name: "service",
            alias: "sv",
            description: "react 接口服务文件生成",
        },
        {
            name: "store",
            alias: "se",
            description: "react zustand 全局状态管理文件生成",
        },
    ];

    constructor(runner: AbstractRunner) {
        super("@nestjs/schematics", runner);
    }

    public async execute(name: string, options: SchematicOption[]) {
        const schematic: string = this.validate(name);
        await super.execute(schematic, options);
    }

    public getSchematics(): Schematic[] {
        return ProCollection.schematics.filter((item) => item.name !== "angular-app");
    }

    private validate(name: string) {
        const schematic = ProCollection.schematics.find((s) => s.name === name || s.alias === name);

        if (schematic === undefined || schematic === null) {
            throw new Error(`Invalid schematic "${name}". Please, ensure that "${name}" exists in this collection.`);
        }
        return schematic.name;
    }
}
