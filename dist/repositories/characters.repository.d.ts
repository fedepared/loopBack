import { DefaultCrudRepository } from '@loopback/repository';
import { Characters, CharactersRelations } from '../models';
import { GotDataSource } from '../datasources';
export declare class CharactersRepository extends DefaultCrudRepository<Characters, typeof Characters.prototype.url, CharactersRelations> {
    constructor(dataSource: GotDataSource);
}
