import useQuiosco from "@/hooks/useQuiosco"
import { format } from "@/helpers"
import Image from "next/image"
import { toast } from "react-toastify"


export default function ProductEdit({ product }) {

    const{modal ,setModal, setProduct, handleDeleteProduct} = useQuiosco()
    return (
        <div className="shadow p-5 mb-3 flex  gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={300} height={250} src={`/img/${product.imagen}.jpg`} alt={`imagen de ${product.nombre}`}
                    className=" rounded-md  w-auto"
                />
            </div>
            <div className="md:w-4/6">
                <p className="text-2xl font-bold mb-2 ">{product.nombre}</p>
                <p className="text-xl font-bold">Cantidad: <span className="text-2xl">{product.cantidad}</span></p>
                <p className="text-xl font-semibold mt-1  text-amber-500">Precio: {format(product.precio)}</p>
                <p className="text-md font-semibold mt-1 text-gray-600 ">Subtotal: {format(product.precio * product.cantidad)}</p>
            </div>
            <div className="w-1/6">
                <button
                    type="button"
                    className="p-1 text-blue-600 hover:text-blue-800 duration-300 text-lg"
                    onClick={() => {
                        setProduct(product)
                        setModal(!modal)
                    }}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="p-1 text-red-600 hover:text-red-800 duration-300 text-lg"
                    onClick={() => 
                        {handleDeleteProduct(product)
                        toast.error("Producto Eliminado")
                        }
                    }
                >   
                    Eliminar
                </button>
            </div>

        </div>
    )
}
