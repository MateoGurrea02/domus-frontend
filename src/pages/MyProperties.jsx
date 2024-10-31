import React, {useState,useEffect,useContext} from "react";
import Header from "../components/Header"
import { Container } from "../components/container/Container";
import CardProduct from '../components/CardProduct'
import { getLocalStorage } from "../utils/myLocalStorage";
import axios from "axios";
import { useParams } from "react-router-dom";


const MyProperties = ()=>{
  const {id} = useParams();
  const [data, setData] = useState('')

  const getProperties = async ()=>{
    const data = (await axios.get(`http://127.0.0.1:4000/api/properties/user/${id}`,{
      headers: {
        'Authorization': getLocalStorage('user').token
      }
    }
    ).then())

    setData(data.data)
  }

  useEffect(() => {
    getProperties()
  }, [])
  
  return(
    <>
    <Header />
    <Container>
              <h3 className="px-5 pb-4 text-gray-600"><span className="font-semibold">{data?data.length:0}</span> Propiedades</h3>
              {data ? data.map((item) => (
                  <div key={item.id} className="px-5 pb-5">
                      <CardProduct data={item.Property} />
                  </div>
              )):"no hay"}
        
    </Container>
  </>
  )
}

export default MyProperties