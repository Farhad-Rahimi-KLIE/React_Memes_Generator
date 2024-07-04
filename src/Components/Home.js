import React, { useEffect, useState } from 'react'
import Card from './Card'
import {getAllMemes} from './Memes'
const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getAllMemes().then((result) => {
            setData(result.data.memes)
        }).catch((err) => {
            console.log(err)
        });
    },[])
  return (
    <div className='row'>
        {
            data.map((curElem)=>{
                return <Card img={curElem.url} title={curElem.name}/>
            })
        }
    </div>
  )
}

export default Home
