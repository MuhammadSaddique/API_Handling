import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    (async()=>{
     const response = await axios.get('/')
     console.log(response.data);
     setProducts(response.data);
    })()
  },[]);


  return (
    <>
     <h1>Calling of API in Reacts</h1>
     <h2> Number of Products : {products.length}</h2>

         </>
  )
}

export default App
