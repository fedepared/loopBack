import { Entity } from '@loopback/repository';
export declare class Houses extends Entity {
    url: string;
    name?: string;
    region?: string;
    coatOfArms?: string;
    words?: string;
    titles?: string[];
    seats?: string[];
    currentLord?: string;
    heir?: string;
    overlord?: string;
    founded?: string;
    founder?: string;
    diedOut?: string;
    ancestralWeapons?: string[];
    cadetBranches?: string[];
    swornMembers?: string[];
    constructor(data?: Partial<Houses>);
}
export interface HousesRelations {
}
export declare type HousesWithRelations = Houses & HousesRelations;
