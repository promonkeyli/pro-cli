import { Runner, RunnerFactory } from "../runners";
import { SchematicRunner } from "../runners/schematic.runner";
import { AbstractCollection } from "./abstract.collection";
import { Collection } from "./collection";
import { CustomCollection } from "./custom.collection";
import { ProCollection } from "./pro.collection";

export class CollectionFactory {
    public static create(collection: Collection | string): AbstractCollection {
        const schematicRunner = RunnerFactory.create(Runner.SCHEMATIC) as SchematicRunner;

        if (collection === Collection.PRO) {
            return new ProCollection(schematicRunner);
        } else {
            return new CustomCollection(collection, schematicRunner);
        }
    }
}
