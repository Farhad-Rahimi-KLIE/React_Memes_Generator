import React from 'react'
import {useNavigate} from 'react-router-dom'
import web from './Images/img5.png';
const Card = (props) => {
    const navigate = useNavigate();
  return (
      <div className="card w-[20vw]">
  <div className="card-body m-1">
    <img src={props.img} alt="" />
    <h4 className="card-title">{props.title}</h4>
    <button onClick={(e) => navigate(`/edit/?url=${props.img}`) + props.title} className='btn btn-primary'>Add</button>
  </div>
</div>
  )
}

export default Card
