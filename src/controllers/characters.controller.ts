import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Characters} from '../models';
import {CharactersRepository} from '../repositories';

export class CharactersController {
  constructor(
    @repository(CharactersRepository)
    public charactersRepository : CharactersRepository,
  ) {}

  @post('/characters', {
    responses: {
      '200': {
        description: 'Characters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Characters)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {
            title: 'NewCharacters',
            
          }),
        },
      },
    })
    characters: Characters,
  ): Promise<Characters> {
    return this.charactersRepository.create(characters);
  }

  @get('/characters/count', {
    responses: {
      '200': {
        description: 'Characters model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Characters)) where?: Where<Characters>,
  ): Promise<Count> {
    return this.charactersRepository.count(where);
  }

  @get('/characters', {
    responses: {
      '200': {
        description: 'Array of Characters model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Characters)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Characters)) filter?: Filter<Characters>,
  ): Promise<Characters[]> {
    return this.charactersRepository.find(filter);
  }

  @patch('/characters', {
    responses: {
      '200': {
        description: 'Characters PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {partial: true}),
        },
      },
    })
    characters: Characters,
    @param.query.object('where', getWhereSchemaFor(Characters)) where?: Where<Characters>,
  ): Promise<Count> {
    return this.charactersRepository.updateAll(characters, where);
  }

  @get('/characters/{id}', {
    responses: {
      '200': {
        description: 'Characters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Characters)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Characters> {
    return this.charactersRepository.findById(id);
  }

  @patch('/characters/{id}', {
    responses: {
      '204': {
        description: 'Characters PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {partial: true}),
        },
      },
    })
    characters: Characters,
  ): Promise<void> {
    await this.charactersRepository.updateById(id, characters);
  }

  @put('/characters/{id}', {
    responses: {
      '204': {
        description: 'Characters PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() characters: Characters,
  ): Promise<void> {
    await this.charactersRepository.replaceById(id, characters);
  }

  @del('/characters/{id}', {
    responses: {
      '204': {
        description: 'Characters DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.charactersRepository.deleteById(id);
  }
}
