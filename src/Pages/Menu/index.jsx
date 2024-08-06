import React, { useState } from 'react'
import Pizzacard from '../../Components/Pizza'
import pizzas from '../../Components/Pizza/data'



function Menu() {
    console.log(pizzas)
    let menuPizza = pizzas.map((pizza, index) => {
        return (

            <Pizzacard
                key={index}
                name={pizza.name}
                description={pizza.description}
                price={pizza.price}
                ingredients={pizza.ingredients}
                sizeOptions={pizza.sizeOptions}
                imageUrl={pizza.imageUrl}
            />



        )
    });

    const [activeTab, setActiveTab] = useState(1)

    console.log(menuPizza)

    const handleTab = (tab) => {
        setActiveTab(tab)
        console.log(tab)
    }


    return (
        <>
            <div className="flex justify-center gap-14  font-semibold text-xl  mt-6 text-red-400 cursor-pointer">
                <h2 onClick={() => handleTab(1)} className={activeTab === 1 ? 'text-red-900' : ''}>Pizza</h2>
                < h2 onClick={() => handleTab(2)} className={activeTab === 2 ? 'text-red-900' : ''}> Burgers</ h2>
                <h2 onClick={() => handleTab(3)} className={activeTab === 3 ? 'text-red-900' : ''}>Drinks</h2>
                <h2 onClick={() => handleTab(4)} className={activeTab === 4 ? 'text-red-900' : ''}>Deserts</h2>
            </div >
            <div>
                {activeTab === 1 &&
                    <div className='flex mt-12'>
                        {menuPizza}
                    </div>}
                {activeTab === 2 && <div>Contenido de Burger</div>}
                {activeTab === 3 && <div>Contenido de Drink</div>}
                {activeTab === 4 && <div>Contenido de Dessert</div>}
            </div>





        </>
    )
}

export default Menu

