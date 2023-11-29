#!/usr/bin/env node
import * as commander from "commander";
const { program } = commander;
import * as figlet from "figlet";
import Printer from "@darkobits/lolcatjs";
import { CommandLoader } from "../commands";

// 控制台输出的logo
const txt = figlet.textSync("P R O C L I", {
    horizontalLayout: "default",
    verticalLayout: "default",
});

// logo 美化
const printer = new Printer();
printer.fromString(txt);
console.log(printer.toString());

const bootstrap = async () => {
    program
        .version(require("../package.json").version, "-v, --version", "Output the current version.")
        .usage("<command> [options]")
        .helpOption("-h, --help", "Output usage information.");
    CommandLoader.load(program);
    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
};

bootstrap();
