import { Entity } from '@loopback/repository';
export declare class Characters extends Entity {
    url?: string;
    name?: string;
    gender?: string;
    culture?: string;
    born?: string;
    died?: string;
    titles?: string[];
    aliases?: string[];
    father?: string;
    mother?: string;
    spouse?: string;
    allegiances?: string[];
    books?: string[];
    povBooks?: string[];
    tvSeries?: string[];
    playedBy?: string[];
    constructor(data?: Partial<Characters>);
}
export interface CharactersRelations {
}
export declare type CharactersWithRelations = Characters & CharactersRelations;
