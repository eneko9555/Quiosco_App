import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import { useEffect, useState} from "react"
import { format } from "@/helpers"

export default function checkout() {

  const {order, name, setName, handleSubmitOrder, totalPrice} = useQuiosco()
  const [disabled, setDisabled] = useState()

  const checkForm = () => {
     order.length === 0 || name === "" ? setDisabled(true) : setDisabled(false)
  }

  useEffect(() => {
    checkForm()
  }, [order, name])

  

  return (
    <Layout
      page={"CheckOut"}
    >
      <h1 className="text-4xl font-bold mt-10">Total a Pagar y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido</p>

      <form
        onSubmit={handleSubmitOrder}
      >
        <div>
          <label htmlFor="nombre" className="block uppercase font-bold text-slate-800">Nombre</label>
          <input 
            type="text"
            id="nombre"
            className="bg-gray-300 rounded-md w-full p-2 md:w-1/2 lg:w-1/3 mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu Nombre.."
          />
          <div className="mt-10">
            <p className="text-2xl">Total a pagar: <span className="font-bold">{format(+totalPrice)}</span></p>
          </div>
          <div>
            <input 
              value="Confirmar Pedido"
              type="submit"
              className={`${disabled ? "bg-amber-200 cursor-auto " : "bg-amber-400 hover:bg-amber-500"} w-full px-5 md:w-auto lg:w-auto p-2 text-center mt-5 cursor-pointer  duration-300 rounded-md font-bold`}
              disabled={disabled}
            />
          </div>
        </div>
      </form>

    </Layout>
  )
}
