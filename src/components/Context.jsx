import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const[products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Chocolate Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 101,
         },
         {
             "_id": "2",
             "title": "Banana Smoothie",
             "images": "https://images.pexels.com/photos/5946804/pexels-photo-5946804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 101,

         },
         {
             "_id": "3",
             "title": "Watermelon Juice",
             "images": "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 101,

         },
         {
             "_id": "4",
             "title": "Kiwi Juice",
             "images": "https://images.pexels.com/photos/1149300/pexels-photo-1149300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 101,

         },
         {
             "_id": "5",
             "title":"Carrot Juice",
             "images": "https://images.pexels.com/photos/8215133/pexels-photo-8215133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 101,

         },
         {
             "_id": "6",
             "title": "Dark Coffee",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 101,

         }
    ])

    const value = {
        products: [products, setProducts],
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}