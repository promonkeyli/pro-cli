"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionFactory = void 0;
const runners_1 = require("../runners");
const collection_1 = require("./collection");
const custom_collection_1 = require("./custom.collection");
const pro_collection_1 = require("./pro.collection");
class CollectionFactory {
    static create(collection) {
        const schematicRunner = runners_1.RunnerFactory.create(runners_1.Runner.SCHEMATIC);
        if (collection === collection_1.Collection.PRO) {
            return new pro_collection_1.ProCollection(schematicRunner);
        }
        else {
            return new custom_collection_1.CustomCollection(collection, schematicRunner);
        }
    }
}
exports.CollectionFactory = CollectionFactory;
