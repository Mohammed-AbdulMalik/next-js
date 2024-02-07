'use client'

export default function Home() {
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
  return (
    <main  >
      <div >
        {/* <User name="malik"/>
        <User name="hitesh"/> */}
        Home Page
        <button onClick={()=>{showAlert("mallik")}}>Click Me</button>
        <InnerComp/>
        {InnerComp()}
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
