import Image from "next/image"
import { format } from "@/helpers"
import { toast } from "react-toastify"


export default function Order({ order }) {
    const { id, nombre, total, pedido } = order

    const completeOrder =  async () => {

        try {
            const res = await fetch(`api/orders/${id}`, {
                headers: {"Content-Type" : "application/json"},
                method: "PUT"
            })
            // Orders with updates true
            const orderUpdate = await res.json()
            toast.success("Pedido Listo")
      
        } catch (error) {
            toast.error("Hubo un error")
        }
    }
    return (
        <div className="border-2 space-y-5 p-10">
            <h3 className="text-2xl font-bold">Orden: {id}</h3>
            <p className="text-lg font-bold">Cliente: {nombre}</p>

            <div>
                {pedido.map(p => (
                        <div key={p.id} className="flex py-3 border-b-2 last-of-type:border-0 items-center">
                            <div className="w-32">
                                <Image width={400} height={500} src={`/img/${p.imagen}.jpg`} alt={`Imagen ${p.nombre}`} />
                            </div>
                            <div className="p-5 space-y-2">
                                <h4 className="text-xl font-bold text-amber-500">{p.nombre}</h4>
                                <h4 className="text-xl font-bold ">Cantidad: {p.cantidad}</h4>
                            </div>
                        </div>
                ))}
            </div>

            <div className="  flex flex-col items-center justify-center gap-4">
                <p className="font-black text-2xl text-amber-500"><span className="text-black">Total a pagar: </span>{format(total)}</p>

                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 px-10 font-bold rounded-lg duration-300"
                    type="button"
                    onClick={ completeOrder }
                >
                    Completar Pedido
                </button>
            </div>
        </div>


    )
}
