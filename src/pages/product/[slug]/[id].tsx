import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import withApollo from '../../../utils/withApollo';
import { useProductQuery } from '../../../generated/graphql';

const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, loading } = useProductQuery({
        variables: {
            id: id as string,
        },
    });
    if (loading) {
        return (
            <div>
                <div>loading lol</div>
            </div>
        );
    }
    return (
        <>
            <Header />
            <h1>{data?.product?.productName}</h1>
        </>
    );
};

export default withApollo({ ssr: false })(Product);
