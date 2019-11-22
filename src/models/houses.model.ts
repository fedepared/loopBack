import {Entity, model, property} from '@loopback/repository';
import {getJsonSchema} from '@loopback/repository-json-schema';

@model()
export class Houses extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  url: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  region?: string;

  @property({
    type: 'string',
  })
  coatOfArms?: string;

  @property({
    type: 'string',
  })
  words?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  titles?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  seats?: string[];

  @property({
    type: 'string',
  })
  currentLord?: string;

  @property({
    type: 'string',
  })
  heir?: string;

  @property({
    type: 'string',
  })
  overlord?: string;

  @property({
    type: 'string',
  })
  founded?: string;

  @property({
    type: 'string',
  })
  founder?: string;

  @property({
    type: 'string',
  })
  diedOut?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  ancestralWeapons?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  cadetBranches?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  swornMembers?: string[];

  constructor(data?: Partial<Houses>) {
    super(data);
  }
}

export interface HousesRelations {
  // describe navigational properties here
}

export type HousesWithRelations = Houses & HousesRelations;

const jsonSchema = getJsonSchema(Houses);
