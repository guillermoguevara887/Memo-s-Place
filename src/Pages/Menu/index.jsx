import React, { useState } from 'react'
import Pizzacard from '../../Components/Pizza'
import pizzas from '../../Components/Pizza/data'

import Burgercard from '../../Components/Burger'
import burgers from '../../Components/Burger/data'

import Drinkcard from '../../Components/Drink'
import drinks from '../../Components/Drink/data'



function Menu() {

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

    let menuBurger = burgers.map((burger, index) => {
        return (

            <Burgercard
                key={index}
                name={burger.name}
                description={burger.description}
                price={burger.price}
                ingredients={burger.ingredients}
                sizeOptions={burger.sizeOptions}
                imageUrl={burger.imageUrl}
            />
        )
    });

    let menuDrink = drinks.map((drink, index) => {
        return (

            <Drinkcard
                key={index}
                name={drink.name}
                description={drink.description}
                price={drink.price}
                imageUrl={drink.imageUrl}
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

            </div >
            <div>
                {activeTab === 1 &&
                    <div className='flex mt-12'>
                        {menuPizza}
                    </div>}
                {activeTab === 2 &&
                    <div className='flex mt-12'>
                        {menuBurger}
                    </div>}
                {activeTab === 3 &&
                    <div className='flex justify-center mt-12'>
                        {menuDrink}
                    </div>}

            </div>





        </>
    )
}

export default Menu

