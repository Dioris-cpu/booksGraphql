import React from "react";
import "./App.css";
import Booklist from "./components/BookList";
import AddBook from "./components/AddBook";
import ApolloClient from 'apollo-boost';
import  InMemoryCache  from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Reading List</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
