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
exports.ProCollection = void 0;
const abstract_collection_1 = require("./abstract.collection");
class ProCollection extends abstract_collection_1.AbstractCollection {
    constructor(runner) {
        super("@nestjs/schematics", runner);
    }
    execute(name, options) {
        const _super = Object.create(null, {
            execute: { get: () => super.execute }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const schematic = this.validate(name);
            yield _super.execute.call(this, schematic, options);
        });
    }
    getSchematics() {
        return ProCollection.schematics.filter((item) => item.name !== "angular-app");
    }
    validate(name) {
        const schematic = ProCollection.schematics.find((s) => s.name === name || s.alias === name);
        if (schematic === undefined || schematic === null) {
            throw new Error(`Invalid schematic "${name}". Please, ensure that "${name}" exists in this collection.`);
        }
        return schematic.name;
    }
}
exports.ProCollection = ProCollection;
ProCollection.schematics = [
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
