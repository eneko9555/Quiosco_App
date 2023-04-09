import { useState, useEffect, createContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [step, setStep] = useState(1)
    const [name, setName] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)

    const router = useRouter()

    useEffect(() => {
        const categories = async () => {
            const response = await fetch("api/categories")
            const result = await response.json()
            setCategories(result)
        }
        categories()
    }, [])

    useEffect(() => {
        setCurrentCategory(categories[0])
    }, [categories])

    const checkCategory = category => {
        setCurrentCategory(category)
    }

    const addOrder = ({ categoriaId, ...product }) => {
        if (order.some(p => p.id === product.id)) {
            const newOrder = order.map(p => {
                if (p.id === product.id) {
                    return product
                }
                return p
            })
            setModal(false)
            toast.info("Producto Actualizado")
            return setOrder(newOrder)
        }
        setOrder([...order, product])
        setModal(false)
        toast.success("Añadido al Carrito")
    }

    const handleChangeStep = step => {
        setStep(step)
    }

    const handleDeleteProduct = product => {
        const newOrder = order.filter(p => p.id !== product.id)
        setOrder(newOrder)
    }

    useEffect(() => {
        const total = order.reduce((total, p) => (p.cantidad * p.precio) + total, 0)
        setTotalPrice(total)
    }, [order])


    const handleSubmitOrder = async e => {
        e.preventDefault()

        try {
            const url = "http://localhost:3000/api/order"
            await fetch(url, {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ nombre: name, fecha: Date.now().toString(), total: totalPrice, pedido: order })
            })

            setCurrentCategory(categories[0])
            setName("")
            toast.success("Pedido Realizado Correctamente")

            setTimeout(() => {
                setOrder([])
                setTotalPrice(0)
                router.push("/")
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <QuioscoContext.Provider
            value={{
                categories,
                checkCategory,
                currentCategory,
                setProduct,
                setModal,
                modal,
                product,
                addOrder,
                order,
                step,
                handleChangeStep,
                handleDeleteProduct,
                name,
                setName,
                handleSubmitOrder,
                totalPrice
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContext