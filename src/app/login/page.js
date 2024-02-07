"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


Link
const Login=()=>{
    const router = useRouter();
    return (
        <>
            <div>
                Login
            </div>
            <Link href="/">go to home page</Link>
            <button onClick={()=>{router.push("/")}}>go to home page</button>
        </>
    )
}

export default Login;
