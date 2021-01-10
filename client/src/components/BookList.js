import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";
import { graphql } from "graphql";
import { render } from "react-dom";

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
  
      return data.id.map(({ books, id }) => (
        <div key={books}>
          <p>
            {books}: {id}
          </p>
        </div>
      ));
    
  }

export default BookList
