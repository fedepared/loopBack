import { Entity } from '@loopback/repository';
export declare class Books extends Entity {
    url?: string;
    name: string;
    isbn?: string;
    authors: string[];
    numberOfPages?: number;
    publisher?: string;
    country?: string;
    mediaType?: string;
    released?: string;
    characters?: string[];
    povCharacters?: string[];
    constructor(data?: Partial<Books>);
}
export interface BooksRelations {
}
export declare type BooksWithRelations = Books & BooksRelations;
