import './App.css';
import Booklist from './components/BookList';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()

})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1> Reading List</h1>
     <Booklist/>
    </div>
   </ApolloProvider>
  );
}

export default App;
