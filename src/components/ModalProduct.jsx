import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"
import { format } from "@/helpers"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"


export default function ModalProduct() {
    const { product, setModal, modal, addOrder, order } = useQuiosco()
    const [cantidad, setCantidad] = useState(1)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        const checkAmount = () => {
            if(order.some( p => p.id === product.id )){
                const check = order.find(p => p.id === product.id)
                setCantidad(check.cantidad)
                setEdit(true)
            }
            
       }
       checkAmount()
    }, [product])
   
    
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
        >

            <div className="md:flex md:items-start gap-5 pb-5  h-screen md:h-auto overflow-y-scroll md:overflow-hidden">
                <div className="md:w-1/3 ">
                    <Image width={400} height={400} src={`/img/${product.imagen}.jpg`} alt="producto"
                        className="rounded-md shadow-md m-auto"
                    />
                </div>
                <div className="md:w-2/3 items-center">
                    <div className="flex mt-5 md:mt-0 justify-end">
                        <button
                            className="scale-150"
                            onClick={() => setModal(!modal)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <h1 className="font-bold text-3xl mt-5 text-center">{product.nombre}</h1>
                    <p className="mt-8 font-black text-5xl text-center text-amber-400">{format(product.precio * cantidad)}</p>
                    <div className="flex gap-6 mt-10 items-center justify-center">
                        <button
                            type="button"
                            onClick={() => {
                                if (cantidad <= 1) return
                                setCantidad(cantidad - 1)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <p className="text-3xl font-semibold">{cantidad}</p>
                        <button
                            type="button"
                            onClick={() => {
                                if (cantidad >= 10) return
                                setCantidad(cantidad + 1)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                        className={ `${edit ? "bg-green-400 hover:bg-green-600" : "bg-amber-400 hover:bg-amber-500"} p-4 mt-5 font-semibold rounded-md w-1/2 duration-300`}
                        onClick={() => {
                            addOrder({...product, cantidad})
                        }}>
                         {`${edit ? "Guardar Cambios" : "Añadir  "}`}
                        </button>
                    </div>
                    

                </div>
            </div>
        </motion.div>
    )
}
