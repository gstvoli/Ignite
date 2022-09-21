"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
//HTTP methods / API RESTful / HTTP CODES
//GET, POST, PUT, PATCH, DELETE
//Primeiro parametro do get é o endereço que o usuario está acessando
//O segundo parametro do get é uma função, que vai ser a função a ser executada quando o usuario
//acessar a rota
//Quando o usuário acessar a rota, a função precisa ter uma resposta
//No Express, a função recebe dois parametros, a requisição e a resposta
//O request busca informações que estão vindo da requisição, e o response devolve elas
app.get('/games', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield prisma.game.findMany();
    return response.json(games);
})),
    app.post('/ads', (request, response) => {
        return response.status(201).json([]);
    }),
    app.get('/games/:id/ads', (request, response) => {
        //const gameId = request.params.id;
        return response.json([]);
    });
app.listen(3333);
