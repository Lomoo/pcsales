declare module 'myTypes' {
  type ProductType = {
    productName: string
    productId: string
    slug: string
    imageUrl: string
    price: number
    salePrice: number
  }

  interface ProductProps {
    product: ProductType
  }
}
module.exports = {
  ProductType,
  ProductProps,
}
