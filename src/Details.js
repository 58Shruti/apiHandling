import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function Details() {

    const[data ,setData] = useState()
   
    const [isLoading, setIsLoading] = useState(true);

     const {id} = useParams();

    useEffect(() => {

      async function getData(){
      axios.get(`http://13.251.201.255/api/productdetails_json/${id}`)
        .then((res) => {
        return( 
        setData(res.data?.data),
        setIsLoading(false)
        )
        })
        .catch((err) =>  setIsLoading(false))
       }
       getData()
      },[])

      if (isLoading) {
        return  <Spinner animation="border" variant="primary"/> ;
      }

  return (
    <div>
    <h3>details page</h3>     
    {
      data?.product_details
       ?
     (<div>
     <img src= {data?.product_details.images} style={{height : "500px", width: "500px"}} />
     <p>Product name : {data?.product_details.productName}</p>
     <p>Brand name : {data?.product_details.brand_name}</p>
     <p>Food type : {data?.product_details.foodType}</p>
     <p>Packaging type : {data?.product_details.packaging_type[0]}</p> 
     </div>) :  "DATA NOT FOUND"
    }
    </div>
  
  )
}

export default Details;
