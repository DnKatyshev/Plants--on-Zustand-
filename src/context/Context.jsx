// react-dependencies
import { createContext, useState } from "react"

// project-component's imports
import {cartData} from './cartData'

// project's styles/img



// Создаём КОНТЕКСТ
export const Context = createContext()


// Делаем новый Объект, с отслеживанием кол-ва товаров по ID  -   1-0, 2-0, 3-0, 4-0..  ^  если добавляем товар будет 1-1, 2-5, 3-0..
export function cartStorage(){
    let cart = {}
    cartData.forEach(item => {
        cart[item.id] = 0
    });

    return cart;
}


export const MainContext = (props) => {

    // Избранное
    function favoritesStorage(){
        let favorites = {}
        cartData.forEach((item) => {
            favorites[item.id] = 0
        })
        return favorites
    }

    const [favoritesMain, setFavoritesMain] = useState(favoritesStorage())

    const addToFavorites = (favoritesId) => {
        setFavoritesMain((prev) => ({
            ...prev, 
            [favoritesId]: prev[favoritesId] + 1
        }))
    }
    const removeFromFavorites = (favoritesId) => {
        setFavoritesMain((prev) => ({
            ...prev, 
            [favoritesId]: prev[favoritesId] - 1
        }))
    }


    const ContextValues = {
        favoritesMain,
        addToFavorites,
        removeFromFavorites
    }



    return(
        <Context.Provider value={ContextValues}>
            {props.children} 
        </Context.Provider>
    )
    // *props.children - дочерние элементы Компонента(элементы внутри тегов этого Компонента)
} 