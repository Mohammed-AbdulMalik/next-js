'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const showAlert=(data)=>{
    window.alert("hi malik");
  }

  const InnerComp=()=>{
    return(
      <>
        <div>
          hi i am malik
        </div>
      </>
    )
  }

  const navigate=(url)=>{
    router.push(url);
  }

  return (
    <main  >
      <div >
        {/* <User name="malik"/>
        <User name="hitesh"/> */}
        Home Page
        <button onClick={()=>{showAlert("mallik")}}>Click Me</button>
        <InnerComp/>
        {InnerComp()}
        <Link href="/login">go to login page</Link>
        <br />
        <Link href="/about">go to login page</Link><br />
        <button onClick={()=>{navigate("/login")}}>go to login page</button><br />
        <button onClick={()=>{navigate("/about")}}>go to About  page</button><br />

        <button onClick={()=>{navigate("/about/aboutstudent")}}>go to Aboutstudent  page</button><br />
        <button onClick={()=>{navigate("/login/loginteacher")}}>go to loginteacher  page</button><br />

      </div>
    </main>
  );
}


// const User=(props)=>{
//   return(
//     <>
//       <div>
//         hi i am {props.name}
//       </div>
//     </>
//   )
// }
