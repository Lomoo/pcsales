import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.contentful.com/content/v1/spaces/00nc818lsz67",
    headers:{
        'Authorization': `Bearer L4X_zDGY-yiU4Gm-epihQZBAg6yjFq7J04LTn-qMaJE`
    },
    cache: new InMemoryCache(),
});

export default client;