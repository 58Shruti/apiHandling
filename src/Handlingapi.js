import React,{useEffect ,useState} from 'react'
import axios from 'axios';
import { Link, NavLink, useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function Handlingapi() {

  const [apidata, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

         useEffect(() => {        
          axios.get("http://13.251.201.255/api/getTrendingProducts/5/0")
          .then((res) => setData(res.data),setIsLoading(false))
          .catch((err) => setIsLoading(false))        
        },[])
 
       console.log(apidata);


  return (
    <>
    <h1>API handling </h1>
  {
    apidata?.data  ?
    (apidata?.data.map((val) => {
      return(
        <div>
    <img src={val.images} style={{height : "400px", width: "400px"}}/>
    <p>NAME : {val.productName}</p>
    <button><Link to={`details/${val.product_id}`}>Details</Link></button>    
        </div>
      )
    })) : ("DATA NOT FOUND" , <Spinner animation="border" variant="primary"/>)
  }
    </>
  )
}

export default Handlingapi;
