import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.contentful.com/content/v1/spaces/00nc818lsz67",
    headers:{
        'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache(),
});

export default client;