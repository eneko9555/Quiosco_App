import { useRouter } from "next/router"
import { motion } from "framer-motion"
import useQuiosco from "@/hooks/useQuiosco"

const steps = [
    { step: 1, name: "Menú", url: "/" },
    { step: 2, name: "Resúmen", url: "/resume" },
    { step: 3, name: "Datos y Total", url: "/checkout" },
]

const Nav = () => {
    const router = useRouter()
    const { handleChangeStep } = useQuiosco()
    
    const calculateWidth = () => {
        if(router.pathname === "/") return "w-1/12"
        if(router.pathname === "/resume")return "w-1/2"
        if(router.pathname === "/checkout") return "w-full" 
    }
   
    return (
        <>
            <div className="flex justify-between ">
                {steps.map(step => (
                    <button
                        className={`${router.pathname === step.url ? "opacity-100" : "opacity-50"} text-2xl font-bold p-3 px-10 rounded-md `}
                        onClick={() => {
                            router.push(step.url)
                            handleChangeStep(step.step)
                        }}
                        key={step.step} >{step.name}</button>
                ))}
            </div>
            <div className="bg-gray-200 mb-10">
                <div className={`${calculateWidth()}  rounded-full bg-amber-400 text-xs  h-3 text-center text-white`}
                >
                </div>
            </div>
        </>
    )
}
export default Nav