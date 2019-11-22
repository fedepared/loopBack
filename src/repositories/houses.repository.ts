import {DefaultCrudRepository} from '@loopback/repository';
import {Houses, HousesRelations} from '../models';
import {GotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HousesRepository extends DefaultCrudRepository<
  Houses,
  typeof Houses.prototype.url,
  HousesRelations
> {
  constructor(
    @inject('datasources.got') dataSource: GotDataSource,
  ) {
    super(Houses, dataSource);
  }
}
