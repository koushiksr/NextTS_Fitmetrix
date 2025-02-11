import { getUsersModel } from "./mongodb";



export async function getUserFromDb(email:string,password:string )  {
    const db  = await getUsersModel();
    const user = db.findOne({email,password})
    return user;
}