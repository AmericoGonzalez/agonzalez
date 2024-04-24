"use server"

import { db } from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function login(formData: FormData) {
    try{ const user = await db.user.findFirstOrThrow({
        where: {
            username: formData.get("username") as string,
            password: formData.get("password") as string
        },
    });
    console.log(user);
    
       // Set cookie with 5-minute expiry
       const now = new Date();
       const fiveMinutesLater = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes in milliseconds
       cookies().set("user_id", String(user.id), {
           expires: fiveMinutesLater,
           path: "/", // Set the path of the cookie as needed
       });
    

    } catch (error) {
        console.log("user not found");
        redirect("/login/log-in?error=invalid%20credentials");
    }
    redirect("/");

}

