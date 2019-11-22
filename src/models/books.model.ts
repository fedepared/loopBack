import {Entity, model, property} from '@loopback/repository';
import {getJsonSchema} from '@loopback/repository-json-schema';

@model()
export class Books extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  url?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  isbn?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  authors: string[];

  @property({
    type: 'number',
  })
  numberOfPages?: number;

  @property({
    type: 'string',
  })
  publisher?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  mediaType?: string;

  @property({
    type: 'date',
  })
  released?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  characters?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  povCharacters?: string[];

  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;

const jsonSchema = getJsonSchema(Books);
