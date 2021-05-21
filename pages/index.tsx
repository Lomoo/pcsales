// pages/index.tsx
// import { GetServerSideProps, NextPage } from 'next'

import { GetServerSideProps, NextPage } from 'next'
import Header from '../components/Header'
import { gql } from '@apollo/client'
import client from '../apollo-client'

interface Props {
  product: {
    productName: string
    imageUrl: string
    price: number
    salePrice: number
  }
}

const IndexPage: NextPage<Props> = ({ product }) => {
  console.log(product)
  return <Header />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        productCollection(limit: 10) {
          items {
            productName
            imageUrl
            price
            salePrice
          }
        }
      }
    `,
  })
  const firstProduct = data.productCollection.items[0]
  return {
    props: {
      product: {
        productName: firstProduct.productName,
        imageUrl: firstProduct.imageUrl,
        price: firstProduct.price,
        salePrice: firstProduct.salePrice,
      },
    },
  }
}
export default IndexPage
