import {DefaultCrudRepository} from '@loopback/repository';
import {Books, BooksRelations} from '../models';
import {GotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.url,
  BooksRelations
> {
  constructor(
    @inject('datasources.got') dataSource: GotDataSource,
  ) {
    super(Books, dataSource);
  }
}
