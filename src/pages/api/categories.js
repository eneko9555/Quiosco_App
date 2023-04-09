import { PrismaClient } from "@prisma/client";

export default async function categories(req,res)  {
    const prisma = new PrismaClient()
    try {
        const categories = await prisma.categoria.findMany({
            include:{
                productos: true
            }
        })
        res.status(200).json(categories)
    } catch (error) {
        console.log(error);
    }
} 