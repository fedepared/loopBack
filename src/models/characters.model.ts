import {Entity, model, property} from '@loopback/repository';
import {getJsonSchema} from '@loopback/repository-json-schema';

@model()
export class Characters extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  url?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'string',
  })
  culture?: string;

  @property({
    type: 'string',
  })
  born?: string;

  @property({
    type: 'string',
  })
  died?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  titles?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  aliases?: string[];

  @property({
    type: 'string',
  })
  father?: string;

  @property({
    type: 'string',
  })
  mother?: string;

  @property({
    type: 'string',
  })
  spouse?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  allegiances?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  books?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  povBooks?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  tvSeries?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  playedBy?: string[];

  constructor(data?: Partial<Characters>) {
    super(data);
  }
}

export interface CharactersRelations {
  // describe navigational properties here
}

export type CharactersWithRelations = Characters & CharactersRelations;

const jsonSchema = getJsonSchema(Characters);
