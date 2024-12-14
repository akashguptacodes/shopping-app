import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import './Home.css'

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try{
            let res = await fetch(API_URL);
            let data = await res.json();
            setPosts(data);
        }
        catch(error){
            console.log("error");
        }
        setLoading(false);
    }

    useEffect(() =>{
        fetchProductData();
    },[])

  return (
    <div className='home-page'>
        {
            loading ? (<Spinner/>):(posts.length>0 ? (<div className='posts'>
                {
                    posts.map((post)=>(
                        <Product key={post.id} post={post} />
                    ))
                }
            </div>): (
                    <div className='No-product-div'>
                        <p>No products found</p>
                    </div>
                ))

        }
    </div>
  )
}

export default Home