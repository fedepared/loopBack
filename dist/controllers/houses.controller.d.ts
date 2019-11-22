import { Count, Filter, Where } from '@loopback/repository';
import { Houses } from '../models';
import { HousesRepository } from '../repositories';
export declare class HousesController {
    housesRepository: HousesRepository;
    constructor(housesRepository: HousesRepository);
    create(houses: Houses): Promise<Houses>;
    count(where?: Where<Houses>): Promise<Count>;
    find(filter?: Filter<Houses>): Promise<Houses[]>;
    updateAll(houses: Houses, where?: Where<Houses>): Promise<Count>;
    findById(id: string): Promise<Houses>;
    updateById(id: string, houses: Houses): Promise<void>;
    replaceById(id: string, houses: Houses): Promise<void>;
    deleteById(id: string): Promise<void>;
}
