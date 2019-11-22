import {DefaultCrudRepository} from '@loopback/repository';
import {Characters, CharactersRelations} from '../models';
import {GotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CharactersRepository extends DefaultCrudRepository<
  Characters,
  typeof Characters.prototype.url,
  CharactersRelations
> {
  constructor(
    @inject('datasources.got') dataSource: GotDataSource,
  ) {
    super(Characters, dataSource);
  }
}
