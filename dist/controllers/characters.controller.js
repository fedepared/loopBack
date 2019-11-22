"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CharactersController = class CharactersController {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async create(characters) {
        return this.charactersRepository.create(characters);
    }
    async count(where) {
        return this.charactersRepository.count(where);
    }
    async find(filter) {
        return this.charactersRepository.find(filter);
    }
    async updateAll(characters, where) {
        return this.charactersRepository.updateAll(characters, where);
    }
    async findById(id) {
        return this.charactersRepository.findById(id);
    }
    async updateById(id, characters) {
        await this.charactersRepository.updateById(id, characters);
    }
    async replaceById(id, characters) {
        await this.charactersRepository.replaceById(id, characters);
    }
    async deleteById(id) {
        await this.charactersRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/characters', {
        responses: {
            '200': {
                description: 'Characters model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Characters) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Characters, {
                    title: 'NewCharacters',
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Characters]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "create", null);
__decorate([
    rest_1.get('/characters/count', {
        responses: {
            '200': {
                description: 'Characters model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Characters))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "count", null);
__decorate([
    rest_1.get('/characters', {
        responses: {
            '200': {
                description: 'Array of Characters model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Characters) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Characters))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "find", null);
__decorate([
    rest_1.patch('/characters', {
        responses: {
            '200': {
                description: 'Characters PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Characters, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Characters))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Characters, Object]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/characters/{id}', {
        responses: {
            '200': {
                description: 'Characters model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Characters) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/characters/{id}', {
        responses: {
            '204': {
                description: 'Characters PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Characters, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Characters]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "updateById", null);
__decorate([
    rest_1.put('/characters/{id}', {
        responses: {
            '204': {
                description: 'Characters PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Characters]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/characters/{id}', {
        responses: {
            '204': {
                description: 'Characters DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharactersController.prototype, "deleteById", null);
CharactersController = __decorate([
    __param(0, repository_1.repository(repositories_1.CharactersRepository)),
    __metadata("design:paramtypes", [repositories_1.CharactersRepository])
], CharactersController);
exports.CharactersController = CharactersController;
//# sourceMappingURL=characters.controller.js.map