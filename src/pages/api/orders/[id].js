import { PrismaClient } from "@prisma/client";


export default async function handler(req,res){
    const prisma = new PrismaClient()
    if(req.method === "PUT"){
       const orderUpdate = await prisma.orden.update({
        where : {
            id: +req.query.id
        },
        data: {
            estado:true
        }
       })
       return res.status(200).json(orderUpdate)
       
    }
}