import {categorias} from "./data/categorias"
import {productos} from "./data/productos"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
    const categories = await prisma.categoria.createMany({
        data: categorias
    })
    const products = await prisma.producto.createMany({
        data: productos
    })
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })