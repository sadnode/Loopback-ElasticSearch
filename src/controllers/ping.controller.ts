/* eslint-disable @typescript-eslint/naming-convention */
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  get, Request, response,
  ResponseObject, RestBindings
} from '@loopback/rest';
import {CategoryRepository} from '../repositories';

const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

export class PingController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private req: Request,
    @repository(CategoryRepository) private categoryRepository: CategoryRepository
    ) {}

  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {
    return {
      greeting: 'Hello from LoopBack! ::)',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  @get('/categories')
  async index() {
    // await this.categoryRepository.create({
    //   id: '1',
    //   name: 'minha primeira categoria',
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // });
    return this.categoryRepository.find();
  }
}
