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
let HousesController = class HousesController {
    constructor(housesRepository) {
        this.housesRepository = housesRepository;
    }
    async create(houses) {
        return this.housesRepository.create(houses);
    }
    async count(where) {
        return this.housesRepository.count(where);
    }
    async find(filter) {
        return this.housesRepository.find(filter);
    }
    async updateAll(houses, where) {
        return this.housesRepository.updateAll(houses, where);
    }
    async findById(id) {
        return this.housesRepository.findById(id);
    }
    async updateById(id, houses) {
        await this.housesRepository.updateById(id, houses);
    }
    async replaceById(id, houses) {
        await this.housesRepository.replaceById(id, houses);
    }
    async deleteById(id) {
        await this.housesRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/houses', {
        responses: {
            '200': {
                description: 'Houses model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Houses) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Houses, {
                    title: 'NewHouses',
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Houses]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "create", null);
__decorate([
    rest_1.get('/houses/count', {
        responses: {
            '200': {
                description: 'Houses model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Houses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "count", null);
__decorate([
    rest_1.get('/houses', {
        responses: {
            '200': {
                description: 'Array of Houses model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Houses) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Houses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "find", null);
__decorate([
    rest_1.patch('/houses', {
        responses: {
            '200': {
                description: 'Houses PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Houses, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Houses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Houses, Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/houses/{id}', {
        responses: {
            '200': {
                description: 'Houses model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Houses) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/houses/{id}', {
        responses: {
            '204': {
                description: 'Houses PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Houses, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Houses]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/houses/{id}', {
        responses: {
            '204': {
                description: 'Houses PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Houses]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/houses/{id}', {
        responses: {
            '204': {
                description: 'Houses DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "deleteById", null);
HousesController = __decorate([
    __param(0, repository_1.repository(repositories_1.HousesRepository)),
    __metadata("design:paramtypes", [repositories_1.HousesRepository])
], HousesController);
exports.HousesController = HousesController;
//# sourceMappingURL=houses.controller.js.map