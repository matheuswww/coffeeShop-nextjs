interface ProdutoProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProdutoProps) {
  return <h1>Product: {params.id}</h1>
}
