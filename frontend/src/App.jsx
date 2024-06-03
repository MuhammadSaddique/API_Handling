import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {

//  const [products,error,loading] =  customReactQuery('/');

const [products , setProducts] = useState([]);
const [error,SetError] = useState(false);
const [loading , setLoading] = useState(false);
const [search , setSearch] = useEffect('API');

useEffect(()=>{
  (async()=>{
   try {
     setLoading(true);
    SetError(false)
    const response = await axios.get('/?search='+ search)
    console.log(response.data);
    setProducts(response.data);
    setLoading(false)
   } catch (error) {
    SetError(true)
    setLoading(false)
   }
  })()
},[search]);



  // if(error){
  //   return <h1>Something went wrongs</h1>
  // }
  // if(loading){
  //   return <h1>Loading......</h1>
// }

  return (
    <>
     <h1>Calling of API in Reacts</h1>
     <input type="text" placeholder='Search' value={search}
     onChange={(e)=>setSearch(e.target.value)} />
     {loading && (<h1>Loading...</h1>)}
     {error && (<h1>Something went wrongs...</h1>)}
     <h2> Number of Products : {products.length}</h2>

         </>
  )
}

export default App

const customReactQuery = (urlPath)=>{
 
  // return [products,error,loading]; 
}

