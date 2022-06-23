import React from "react";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client/core";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      {data.allMovies.map((data) => {
        return <li key={data.id}>{data.title}</li>;
      })}
    </div>
  );
}
