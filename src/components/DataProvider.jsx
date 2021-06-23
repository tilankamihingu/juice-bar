import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Mango lassi",
             "images": "https://images.pexels.com/photos/8181523/pexels-photo-8181523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 340.00,
        },
        {
            "_id":"2",
             "title": "Watermelon",
             "images": "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 800.00 ,
        },
        {
            "_id":"3",
             "title": "chocolate smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 150.00,
        },
        {
            "_id":"4",
             "title": "Carrot juice",
             "images": "https://images.pexels.com/photos/8215133/pexels-photo-8215133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 250.00,
        },
        {
            "_id":"5",
             "title": "banana smoothie",
             "images": "https://images.pexels.com/photos/3662124/pexels-photo-3662124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 550.00,
        },
        {
            "_id":"6",
             "title": "Green juice",
             "images": "https://images.pexels.com/photos/6597063/pexels-photo-6597063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 100.00,
        },
    ])

    const value = {
        products : [products, setProducts]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}