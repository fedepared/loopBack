import { DefaultCrudRepository } from '@loopback/repository';
import { Books, BooksRelations } from '../models';
import { GotDataSource } from '../datasources';
export declare class BooksRepository extends DefaultCrudRepository<Books, typeof Books.prototype.url, BooksRelations> {
    constructor(dataSource: GotDataSource);
}
