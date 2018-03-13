// logic for express side
const express = require('express');
const expressGraphQL = require('express-graphql');  // Compatibility layer between GraphQL and express
const schema = require('./schema/schema.js');
const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true  
}));

app.listen(4000, () => {
    console.log('listening on port 4000');
});

