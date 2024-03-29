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
let BooksController = class BooksController {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async create(books) {
        return this.booksRepository.create(books);
    }
    async count(where) {
        return this.booksRepository.count(where);
    }
    async find(filter) {
        return this.booksRepository.find(filter);
    }
    async updateAll(books, where) {
        return this.booksRepository.updateAll(books, where);
    }
    async findById(id) {
        return this.booksRepository.findById(id);
    }
    async updateById(id, books) {
        await this.booksRepository.updateById(id, books);
    }
    async replaceById(id, books) {
        await this.booksRepository.replaceById(id, books);
    }
    async deleteById(id) {
        await this.booksRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/books', {
        responses: {
            '200': {
                description: 'Books model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Books) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Books, {
                    title: 'NewBooks',
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Books]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
__decorate([
    rest_1.get('/books/count', {
        responses: {
            '200': {
                description: 'Books model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Books))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "count", null);
__decorate([
    rest_1.get('/books', {
        responses: {
            '200': {
                description: 'Array of Books model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Books) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Books))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "find", null);
__decorate([
    rest_1.patch('/books', {
        responses: {
            '200': {
                description: 'Books PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Books, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Books))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Books, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/books/{id}', {
        responses: {
            '200': {
                description: 'Books model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Books) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findById", null);
__decorate([
    rest_1.patch('/books/{id}', {
        responses: {
            '204': {
                description: 'Books PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Books, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Books]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "updateById", null);
__decorate([
    rest_1.put('/books/{id}', {
        responses: {
            '204': {
                description: 'Books PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Books]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/books/{id}', {
        responses: {
            '204': {
                description: 'Books DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "deleteById", null);
BooksController = __decorate([
    __param(0, repository_1.repository(repositories_1.BooksRepository)),
    __metadata("design:paramtypes", [repositories_1.BooksRepository])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map