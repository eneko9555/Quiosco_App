import AdminLayout from "@/layout/AdminLayout"
import useSWR from "swr"
import Order from "@/components/Order"

export default function admin() {

    const fetcher = () => fetch("api/order").then(data => data.json())
    const { data, error, isLoading } = useSWR("api/order", fetcher, {
        refreshInterval : 10
    })

    return (
        <AdminLayout
            page={"Panel de Administración"}
        >
            <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra los Pedidos</p>
            {data && data.length ? data.map(order => <Order key={order.id} order={order} />) : <h2>No hay pedidos</h2>}
        </AdminLayout>
    )
}
