import { DefaultCrudRepository } from '@loopback/repository';
import { Houses, HousesRelations } from '../models';
import { GotDataSource } from '../datasources';
export declare class HousesRepository extends DefaultCrudRepository<Houses, typeof Houses.prototype.url, HousesRelations> {
    constructor(dataSource: GotDataSource);
}
