"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const LoginStudent=()=>{
    const router = useRouter();
    return(
        <>
            <h1>This is login Student page</h1>
            <Link href="/">go to home page</Link>
            <button onClick={()=>{router.push("/")}}>Go to home Page</button>
        </>
    )
}

export default LoginStudent