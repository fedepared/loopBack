import { Count, Filter, Where } from '@loopback/repository';
import { Characters } from '../models';
import { CharactersRepository } from '../repositories';
export declare class CharactersController {
    charactersRepository: CharactersRepository;
    constructor(charactersRepository: CharactersRepository);
    create(characters: Characters): Promise<Characters>;
    count(where?: Where<Characters>): Promise<Count>;
    find(filter?: Filter<Characters>): Promise<Characters[]>;
    updateAll(characters: Characters, where?: Where<Characters>): Promise<Count>;
    findById(id: string): Promise<Characters>;
    updateById(id: string, characters: Characters): Promise<void>;
    replaceById(id: string, characters: Characters): Promise<void>;
    deleteById(id: string): Promise<void>;
}
