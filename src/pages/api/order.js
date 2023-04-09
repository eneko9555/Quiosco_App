import { PrismaClient } from "@prisma/client";

export default async function order(req, res) {
    const prisma = new PrismaClient()

    try {
        if (req.method === "POST") {
            const order = await prisma.orden.create({
                data: req.body
            })
            return res.json(order)
        }

        if (req.method === "GET"){
            const orders = await prisma.orden.findMany({
                where:{
                    estado: false
                }
            })
            return res.status(200).json(orders)
        }

    } catch (error) {
        console.log(error);
    }
} 