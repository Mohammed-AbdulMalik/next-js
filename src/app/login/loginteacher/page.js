"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const LoginTeacher=()=>{
    const router = useRouter();
    return(
        <>
            <h1 className="heading">This is Login Teacher page page</h1>
            <Link href="/">go to home page</Link>
            <button onClick={()=>{router.push("/")}}>Go to home Page</button>
        </>
    )
}

export default LoginTeacher;
