import royalBurgerImage from './burger_picture/royal.jpg'
import cheeseBurgerImage from './burger_picture/cheeseBurger.jpg';
import baconBurgerImage from "./burger_picture/bacon.jpg";
import crispyChickenBurgerImage from "./burger_picture/crispy.jpg";



const burgers = [
    {
        name: "Royal",
        description: "A classic burger with a juicy beef patty, lettuce, tomato, and special sauce.",
        price: 12.99,
        ingredients: ["Beef Patty", "Lettuce", "Tomato", "Special Sauce"],
        sizeOptions: ["Fries", "Salad", "Onion Rings", "Ceaser Salad"],
        imageUrl: royalBurgerImage
    },
    {
        name: "Cheese",
        description: "A delicious burger topped with melted cheddar cheese, pickles, and ketchup.",
        price: 11.99,
        ingredients: ["Beef Patty", "Cheddar Cheese", "Pickles", "Ketchup"],
        sizeOptions: ["Fries", "Salad", "Onion Rings", "Ceaser Salad"],
        imageUrl: cheeseBurgerImage
    },
    {
        name: "Bacon",
        description: "A savory burger with crispy bacon, lettuce, tomato, and barbecue sauce.",
        price: 13.99,
        ingredients: ["Beef Patty", "Bacon", "Lettuce", "Tomato", "Barbecue Sauce"],
        sizeOptions: ["Fries", "Salad", "Onion Rings", "Ceaser Salad"],
        imageUrl: baconBurgerImage
    },
    {
        name: "Crispy Chicken",
        description: "A crispy chicken sandwich with lettuce, tomato, and mayo.",
        price: 10.99,
        ingredients: ["Crispy Chicken Patty", "Lettuce", "Tomato", "Mayo"],
        sizeOptions: ["Fries", "Salad", "Onion Rings", "Ceaser Salad"],
        imageUrl: crispyChickenBurgerImage
    }
];

export default burgers;
