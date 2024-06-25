
import { useState } from "react";
import Header from "./component/header";
import SinglePage from "./component/single";
export default function App(){
  const a = useState();
  const [count, Setcount] = useState(10);
  console.log(a);
  return(
  <>
    <Header/>
    <SinglePage/>
    <h1 className="mb-4">{count}</h1>
    <button className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hoveer:bg-green-100"onClick={()=> Setcount(count+1)}>add</button>
    <button className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hoveer:bg-green-100"onClick={()=> Setcount(count-1)}>sub</button>
    
    <button className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hoveer:bg-green-100" onClick={()=> Setcount(0)}>reset</button>

    <button className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hoveer:bg-green-100">Click me</button>
    
  </>
)
}



