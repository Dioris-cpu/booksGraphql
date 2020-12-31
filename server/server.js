const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema')
const app = express()
 


app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      schema
    })
    );

app.listen(3000, () => console.log("server is running on port 3000"));

 
