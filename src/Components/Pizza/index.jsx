
import React from 'react'
import './style.css'

import { IoIosAddCircleOutline } from "react-icons/io";

const Pizzacard = ({ name, price, imageUrl, description }) => {
    return (
        <div className="m-4 p-4 w-80 h-auto border border-gray-300 rounded-lg shadow-md flex flex-col">
            <div>
                <div className='btn-main'>
                    <div className='btn' onClick={() => { addCart }}>
                        <IoIosAddCircleOutline />


                    </div>

                </div>
                <div className='flex-shrink-0'>
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-48 object-cover rounded-t-lg" />
                </div>
                <div  >
                    <h2 className='font-bold'>{name}</h2>
                    <p className='font-medium text-gray-400'>  {description}</p>
                    <h3>${price}</h3>

                </div>


            </div>



        </div>
    );


}

export default Pizzacard;



