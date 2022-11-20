import React, {useEffect, useState} from "react";
import {AiFillStar} from 'react-icons/ai';
import "./Dashboard.css"

export default function Dashbaord(){
    const [data, setData] = useState([]);

    const getData = () => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => {
            setData(json)
        })
    }

    useEffect(() => {
        getData();},[]
    );

    
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="row">
                {data.map (item => 
                <div className="card">
                    <h4 className="title">{item.title} ({item.category})</h4>
                    <div className="item-info">                            
                            <div>
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                                <div className="rating">
                                    <p>{item.rating.rate} <AiFillStar/></p>
                                    <p>{item.rating.count} Reviews</p>
                                </div>
                            </div>                                                     
                        </div>
                    <div className="container" key={item.id}>                    
                        <img src={item.image} className="image"/>
                        <p>{item.price}$</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}