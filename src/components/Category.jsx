import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

export default function Category({ category }) {
  const { currentCategory, checkCategory } = useQuiosco()

  return (
    <div className={`${currentCategory?.id === category.id ? "bg-amber-400" : ""} flex items-center justify-center xl:justify-start gap-3 w-full  p-4 rounded-md hover:bg-amber-400 transition-colors duration-300`}>

      <Image height={100} width={100} src={`/img/icono_${category.icono}.svg`} alt="imagen icono" />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer "
        onClick={() => {
           window.scrollTo({ 
             top: document.querySelector(".ref > img").getBoundingClientRect().y,
             behavior: 'smooth'
           });
          checkCategory(category)
            
        }}
      >
        {category.nombre}
      </button>
    </div>
  )
}
