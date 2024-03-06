import { Sport as ImportedSport } from "./sport.type";
import { User as ImportedUser } from "./user.type";
import { Event as ImportedEvent } from "./event.type";

export namespace Types {
    export type Sport = ImportedSport;
    export type User = ImportedUser;
    export type Event = ImportedEvent;
}