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
import {Houses} from '../models';
import {HousesRepository} from '../repositories';

export class HousesController {
  constructor(
    @repository(HousesRepository)
    public housesRepository : HousesRepository,
  ) {}

  @post('/houses', {
    responses: {
      '200': {
        description: 'Houses model instance',
        content: {'application/json': {schema: getModelSchemaRef(Houses)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Houses, {
            title: 'NewHouses',
            
          }),
        },
      },
    })
    houses: Houses,
  ): Promise<Houses> {
    return this.housesRepository.create(houses);
  }

  @get('/houses/count', {
    responses: {
      '200': {
        description: 'Houses model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Houses)) where?: Where<Houses>,
  ): Promise<Count> {
    return this.housesRepository.count(where);
  }

  @get('/houses', {
    responses: {
      '200': {
        description: 'Array of Houses model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Houses)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Houses)) filter?: Filter<Houses>,
  ): Promise<Houses[]> {
    return this.housesRepository.find(filter);
  }

  @patch('/houses', {
    responses: {
      '200': {
        description: 'Houses PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Houses, {partial: true}),
        },
      },
    })
    houses: Houses,
    @param.query.object('where', getWhereSchemaFor(Houses)) where?: Where<Houses>,
  ): Promise<Count> {
    return this.housesRepository.updateAll(houses, where);
  }

  @get('/houses/{id}', {
    responses: {
      '200': {
        description: 'Houses model instance',
        content: {'application/json': {schema: getModelSchemaRef(Houses)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Houses> {
    return this.housesRepository.findById(id);
  }

  @patch('/houses/{id}', {
    responses: {
      '204': {
        description: 'Houses PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Houses, {partial: true}),
        },
      },
    })
    houses: Houses,
  ): Promise<void> {
    await this.housesRepository.updateById(id, houses);
  }

  @put('/houses/{id}', {
    responses: {
      '204': {
        description: 'Houses PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() houses: Houses,
  ): Promise<void> {
    await this.housesRepository.replaceById(id, houses);
  }

  @del('/houses/{id}', {
    responses: {
      '204': {
        description: 'Houses DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.housesRepository.deleteById(id);
  }
}
