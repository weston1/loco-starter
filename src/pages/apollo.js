import React from "react";
import { graphql } from "gatsby";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import App from "../App";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import "../app.css";

const httpLink = createHttpLink({
  uri: "https://openvape-com.myshopify.com/api/graphql",
});

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": "c59d6fa003e16cec1a022f6463c617d5",
  },
}));

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    meme(where: { id: "cjke2xlf9nhd90953khilyzja" }) {
      photo {
        url(
          transformation: {
            image: { resize: { width: 600, height: 600, fit: crop } }
          }
        )
      }
    }
  }
`;

export default ({
  data: {
    rickAndMorty: { character },
  },
}) => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);

  return (
    <div>
      <h1>{character.name} With Sara</h1>
      <div className="container">
        <p>
          Rick &amp; Morty API data loads at build time. Sara Vieira’s meme API
          loads at runtime.
        </p>
      </div>

      <div>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: 300 }}
        />

        {loading && <p>Loading Sara...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.meme && data.meme.photo && (
          <img
            src={data.meme.photo.url}
            alt="Sara Vieira"
            style={{ maxWidth: 300 }}
          />
        )}
      </div>
    </div>
  );
};
