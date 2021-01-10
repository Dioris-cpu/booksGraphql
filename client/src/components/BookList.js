import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  
      return data.books.map(({ name, id }) => (
        <div key={name}>
          <p>
            {name}: {id}
          </p>
        </div>
      ));
    
  }

export default BookList
