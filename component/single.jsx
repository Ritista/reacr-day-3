import { useState, useEffect } from "react"
import axios from "axios";
const SinglePage = () => {
    const [post, Setpost] = useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                let response = await 
                axios.get("https://fakestoreapi.com/products/1");
                // fetch("https://jsonplaceholder.typicode.com/todos/1");
                // let data = await response.json();
                Setpost(response.data);
            }catch(e){
                console.log(e.message);
            }
        }
        fetchData()
        console.log(fetchData());
    },[])
  return (
    <div>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        <h1>{post.price}</h1>
        <h1>{post.category}</h1>
        <h1>{post.description}</h1>
        <img src={post.image}></img>
        </div>
  )
}
export default SinglePage
