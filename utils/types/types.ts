export type ProductType = {
  id: string
  documentId: string
  name: string
  description: string
  image: {
    name: string
    width: number
    url: string
  }
  price: number
  color?: string
  quantity: number
  priceUnit: number
  slug?: string
}

export type Products = ProductType[]

export type UserRegisterType = {
  name: string
  email: string
  password: string
}

export type ResourceType = {
  resourceName: string
  sort?: string[]
  populate?: string[]
  fields?: string[]
  filters?: object
  pagination?: {
    pageSize: number
    page: number
  }
  method?: "GET" | "POST" | "PUT"
  body?: object
  type?: "auth" | "content"
  authorizationToken?: string
}

export type UserType = {
  id: string
  name: string
  email: string
}
