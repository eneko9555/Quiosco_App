import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Category from "./Category"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Sidebar() {

  const { categories } = useQuiosco()
  const [visible, setVisible] = useState(false)




  return (
    <>
      <div className="flex justify-center mt-3 ">
        <Image width={200} height={50} src="img/logo.svg" alt="imagen logotipo" className="p-2" />
      </div>

      <div className={` xl:hidden flex justify-center mx-32 p-2 rounded-xl font-bold   mt-10 bg-amber-400 `}>
        <button
          type="button"
          className=" tracking-wider text-xl p-2 w-full "
          onClick={() => {
            setVisible(!visible)
          }}
        >Categorias</button>
      </div>


      {visible ? (
        <motion.div
          initial={{ opacity: 0 , y: "150%" }}
          animate={{ opacity: 1 , y: 0}}
          transition={{ duration: 1, type: "spring"}}

        >
          <nav className={` mt-10  xl:block `}>
            {categories.map(category => <Category key={category.id} category={category} />)}
          </nav>
        </motion.div>

      ) : (
        <nav className={` mt-10 hidden xl:block sticky top-10`}>
          {categories.map(category => <Category key={category.id} category={category} />)}
        </nav>

      )


      }



    </>
  )
}
