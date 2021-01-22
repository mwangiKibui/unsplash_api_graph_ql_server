const {ApolloServer} = require('apollo-server');

//components

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

//start off the server

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = process.env.NODE_ENV || 4000;

async function initialize(){

    await server.listen(PORT).then( result => {
        return console.log(`server started on ${result['url']}`);
    }).catch(console.log);

};

initialize();