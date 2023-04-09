import Image from "next/image"
import { format } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"



export default function Product({ product }) {

  const { setProduct, setModal, modal, order} = useQuiosco()
  const [check, setCheck] = useState()

  useEffect(() => {
    order.some(p => p.id === product.id) ? setCheck(true) : setCheck(false)
  }, [order])

  return (
    <motion.div
      initial={{ opacity: 0, x: "-20%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, bounce: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
      viewport={{ once: true }} // one time once the viewport is active
    >
      <div className="rounded-md hover:scale-105 transition-all duration-500 p-4 border-2 border-white bg-white shadow-md flex flex-col items-center justify-between min-h-full ref " >
        <Image width={250} height={250} src={`/img/${product.imagen}.jpg`} alt={`imagen de ${product.nombre}`}
          className=" rounded-md  w-auto"
        ></Image>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-thin">{product.nombre}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500 ">
            {format(product.precio)}
          </p>
        </div>
     
        <button
          className={` ${check ? "bg-blue-400 hover:bg-blue-600" : "bg-amber-400 hover:bg-amber-500"}  w-full rounded-md p-3 mt-3 font-bold  duration-300 `}
          onClick={() => {
            setProduct(product)
            setModal(!modal)
          }}
        >
          {check ? "Actualizar" : "Añadir al Carrito"}
        </button>
      </div>

    </motion.div>

  )
}
