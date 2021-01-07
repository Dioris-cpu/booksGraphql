const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

// connect to mongodb database

// Connect to the MongoDB cluster
mongoose.connect(
  "mongodb+srv://tomcat-admin:smoothcheeks77@cluster0.x2tvl.mongodb.net/books",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(3000, () => console.log("server is running on port 3000"));
