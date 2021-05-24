import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo } from 'next-apollo';

const apolloClient = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/00nc818lsz67`,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
    cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
