import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// app.get('api/products',(req,res)=>{
//     const products = 
//         [
//             {
//               "id": 1,
//               "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//               "price": 109.95,
//               "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              
//             },
//             {
//               "id": 2,
//               "title": "Mens Casual Premium Slim Fit T-Shirts ",
//               "price": 22.3,
//               "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//             },
//             {
//               "id": 3,
//               "title": "Mens Cotton Jacket",
//               "price": 55.99,
//               "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//             },
//             {
//               "id": 4,
//               "title": "Mens Casual Slim Fit",
//               "price": 15.99,
//               "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//             },
//             {
//               "id": 5,
//               "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//               "price": 695,
//               "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//             },
//             {
//               "id": 6,
//               "title": "Solid Gold Petite Micropave ",
//               "price": 168,
//               "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//             },
//             {
//               "id": 7,
//               "title": "White Gold Plated Princess",
//               "price": 9.99,
//               "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//             }
//     ]

//     // return res.send("MEss")

//     if(req.query.search){
//      const filterProducts =   products.filter(product => 
//             product.name.includes(req.query.search)
//         )
//         res.send(filterProducts);
//         return;
//     }
   
//     setTimeout(() => {
//         res.send(products)
//     }, 3000);
// })

app.get('/',(req,res)=>{

    const products = 
        [
            {
              "id": 1,
              "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              "price": 109.95,
              "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              
            },
            {
              "id": 2,
              "title": "Mens Casual Premium Slim Fit T-Shirts ",
              "price": 22.3,
              "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            },
            {
              "id": 3,
              "title": "Mens Cotton Jacket",
              "price": 55.99,
              "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            },
            {
              "id": 4,
              "title": "Mens Casual Slim Fit",
              "price": 15.99,
              "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            },
            {
              "id": 5,
              "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
              "price": 695,
              "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            },
            {
              "id": 6,
              "title": "Solid Gold Petite Micropave ",
              "price": 168,
              "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            },
            {
              "id": 7,
              "title": "White Gold Plated Princess",
              "price": 9.99,
              "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            }
    ]

    


res.send(products)
return;
    // res.json({message:"Hello world"})
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})


 export default app;