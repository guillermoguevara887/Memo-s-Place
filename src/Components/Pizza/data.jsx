import margaritaImage from './margarita.jpg';
import peperoniImage from './peperoni.webp';
import meatLoverImage from './meat.jpg';
import fourCheeseImage from './cheese.jpg';

const pizzas = [
    {
        name: "Margherita",
        description: "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
        price: 9.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
        sizeOptions: ["Small", "Medium", "Large"],
        imageUrl: margaritaImage
    },
    {
        name: "Pepperoni",
        description: "Spicy pepperoni with tomato sauce and mozzarella cheese.",
        price: 11.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
        sizeOptions: ["Small", "Medium", "Large"],
        imageUrl: peperoniImage
    },
    {
        name: "Meat-Lover",
        description: "Loaded with various meats including sausage, pepperoni, and bacon.",
        price: 13.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Sausage", "Pepperoni", "Bacon"],
        sizeOptions: ["Small", "Medium", "Large"],
        imageUrl: meatLoverImage
    },
    {
        name: "Four-Cheese",
        description: "A rich blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
        price: 12.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Cheddar Cheese", "Parmesan Cheese", "Gouda Cheese"],
        sizeOptions: ["Small", "Medium", "Large"],
        imageUrl: fourCheeseImage
    }
];

export default pizzas;

