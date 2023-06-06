import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Img.scss'
function Img() {
    const [data,setData]=useState([])
    const [imageUrls, setImageUrls] = useState([]);
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/books/')
    .then(((res)=>setData(res.data)))
    .catch((err)=>console.log(err))
    },[])
    useEffect(() => {
        const fetchGraphImages = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/api/graph_images/');
            const { image_urls } = response.data;
            setImageUrls(image_urls);
          } catch (error) {
            console.error(error);
        }
        };
        fetchGraphImages();
    }, []);
return (
    <div>
        <Navbar/>
        <div className='body'>
                    {data?.map((img,index)=>(
            <div>
                <img key={index} src={`${img.cover}`} alt=''/>
            </div>
        ))}
        </div>
    </div>
)
}

export default Img