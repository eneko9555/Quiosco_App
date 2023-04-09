import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco"

import ProductEdit from "@/components/ProductEdit"

export default function resume() {
  const { order } = useQuiosco()
  
  return (
    <Layout
      page={"Resúmen"}
    >
      <h1 className="text-4xl font-bold mt-10">Resúmen</h1>
      <p className="text-2xl my-10">Comprueba tu Pedido</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl font-semibold">No hay productos en tu pedido</p>
      ) : 
        <div className="grid grid-flow-col-1 md:grid-cols-2  gap-6">
          {order.map((product) =>  <ProductEdit key={product.id} product={product} />)}
        </div>
      
      }

    </Layout >

  )
}
