import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import Product from "@/components/Product"
import { motion } from "framer-motion"



export default function Home() {
  const {currentCategory} = useQuiosco()
  
  return (
    <Layout
      page={`Menú ${currentCategory?.nombre}`}
    >
      <motion.div
         initial={{ opacity: 0, x: "-20%" }}
         animate={{opacity: 1 , x: "0%"}}
        // whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 2, bounce: 0.5, delay: 1.5, type: "spring", stiffness: 100 }}
         
      >
        
        <h1 className="text-4xl font-black mt-10  ">{currentCategory?.nombre}</h1>
        <p className="text-2xl my-10">Personaliza tu pedido a continuación</p>
      </motion.div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
        {currentCategory?.productos?.map(product => <Product product={product} key={product.id}/>)}
      </div>
        
    </Layout>
    
  )
}

