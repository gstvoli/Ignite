import express from 'express';
const app = express();
//Primeiro parametro do get é o endereço que o usuario está acessando
//O segundo parametro do get é uma função, que vai ser a função a ser executada quando o usuario
//acessar a rota
//Quando o usuário acessar a rota, a função precisa ter uma resposta
//No Express, a função recebe dois parametros, a requisição e a resposta
//O request busca informações que estão vindo da requisição, e o response devolve elas
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
    { id: 5, name: 'Anúncio 5' }
  ]);
});
app.listen(3333);
