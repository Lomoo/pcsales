import Header from '../components/Header'
import NextLink from 'next/link'
import { useProductsQuery } from '../generated/graphql'
import withApollo from '../utils/withApollo'
import { Link } from '@material-ui/core'
const Index = () => {
  const { data, loading, error } = useProductsQuery()
  if (!loading && !data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    )
  }
  return (
    <>
      <Header />
      <div>
        {data?.productCollection?.items.map((product) => (
          <NextLink href="/product/[slug]/[id]" as={`/product/${product?.slug}/${product?.sys.id}`} key={product?.sys.id}>
            <Link>
              <h1> {product?.productName} </h1>
            </Link>
          </NextLink>
        ))}
      </div>
    </>
  )
}
// const IndexPage: NextPage<ProductProps> = ({ product }) => {
//   console.log(product)
//   return <Header />
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         productCollection(limit: 10) {
//           items {
//             productName
//             imageUrl
//             price
//             salePrice
//           }
//         }
//       }
//     `,
//   })
//   const firstProduct = data.productCollection.items[0]
//   return {
//     props: {
//       product: {
//         productName: firstProduct.productName,
//         imageUrl: firstProduct.imageUrl,
//         price: firstProduct.price,
//         salePrice: firstProduct.salePrice,
//       },
//     },
//   }
// }
// export default IndexPage
export default withApollo({ ssr: true })(Index)
