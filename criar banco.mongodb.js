--acessar um banco
use heroesDb

--verificar os bancos existentes
--show dbs

--verificar as coleções de um banco
show collections

--crirar uma coleção
db.createCollection("nome da coleção")


--CRUD
--criar uma coleção por inserção de dados
--CREATE
db.heroes.insertOne({
    nome: 'Superman',
    time: 'Liga da Justiça',
    idade: 33,
    genero: 'Masculino',
    habilidades: ['Superforça','Voo','Visão de Calor','Visão de Raio-X'],
    usaCapa: true,
    caracteristicas: {
        olhos: 'Castanho',
        cabelos: 'Preto'
    }
})

db.heroes.insertMany([
    {
        nome: 'Batman',
        time: 'Liga da Justiça',
        idade: 42,
        genero: 'Masculino',
        habilidades: ['Inteligência', 'Riqueza', 'Habilidades de Combate'],
        usaCapa: true,
        caracteristicas: {
            olhos: 'Preto',
            cabelos: 'Preto'
        },
        universo: 'DC'
    },
    {
        nome: 'Mulher Maravilha',
        time: 'Liga da Justiça',
        idade: 5000,
        genero: 'Feminino',
        habilidades: ['Superforça','Velocidade', 'Sentido aguçado'],
        usaCapa: false,
        caracteristicas: {
            olhos: 'Azul',
            cabelos: 'Preto'
        },
        universo: 'DC'
    }
])

--READ
db.heroes.find()
db.heroes.find().pretty()
db.heroes.find({ usaCapa: false})

--UPDATE
db.heroes.updateOne(
    { nome: 'Superman' },
    { $set: {universo: 'DC'}}
)

--DELETE
db.heroes.deleteOne({_id: 1})
db.heroes.deleteMany({universo: 'DC'})

db.heroes.insertOne({
    nome: 'Capitão América',
    time: 'Vingadores',
    idade: 38,
    genero: 'Masculino',
    habilidades: ['Superforça','Estrategista'],
    usaCapa: false,
    caracteristicas: {
        olhos: 'Azul',
        cabelos: 'Loiro'
    },
    universo: 'Marvel'
})

db.heroes.updateOne(
    { nome: 'Capitão América' },
    { $set: {universo: 'DC'}}
)

db.heroes.deleteOne({nome: 'Capitão América'})