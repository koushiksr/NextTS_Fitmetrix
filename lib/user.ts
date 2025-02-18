// import { getUsersModel } from "./mongodb";
// 

import client, { getSchoolModel } from "./mongodb";



export async function getUserFromDb(email:string,password:string )  {
    console.log("ghs")
    console.log(email,password)
    // const db  = await getUsersModel();
    console.log("ghs")
    // const user = db.find()
    console.log("ghs")
    // return user;
}
export async function consoleUser(credentials:any) {
     const connection = await client.connect();
     const db = connection.db(process.env.MONGODB_DB);
     const school = db.collection("schools");
     const data = school.find()
     console.log(data)
}