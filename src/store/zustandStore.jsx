// Zustand
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

import { immer } from "zustand/middleware/immer";
import { cartData } from "../context/cartData";
import { cartStorage } from "../context/Context";

const car = cartStorage()

export const useStore = create(immer(persist((set, get) => ({

    filterCardsText: "", // state-ПОИСКА
    cartObject: car,  // state(объект)-КОРЗИНЫ
    totalPrice: 0,


    // Action ПОИСКА:
    setFilterCardsText: (text) => {
        set({ filterCardsText: text })
    },

    // Action's  КОРЗИНЫ:
    addToCart: (cartId) => {
        set((state) => {
            state.cartObject[cartId] = state.cartObject[cartId] + 1
        })
    },
    
    removeFromCart: (cartId) => {
        set((state) => {
            state.cartObject[cartId] = state.cartObject[cartId] - 1
        })
    },
    removeCompletelyFromCart: (cartId) => {
        set((state) => {
            state.cartObject[cartId] = state.cartObject[cartId] - state.cartObject[cartId]
        })
    },
    addArbitraryCout: (cartId, cartInputCount) => {
        set((state) => {
            state.cartObject[cartId] = cartInputCount
        })
    },

    getTotalPrice: () => {
        set(state => {
            let totalPrice = 0;
            for (let item in state.cartObject) {
                let element = cartData.find((product) => product.id === Number(item))
                totalPrice += state.cartObject[item] * parseInt(element.price)
            }
            state.totalPrice = totalPrice
        })
    },
}),
    {
        name: 'cart-store', // название ключа в localStorage
        getStorage: () => sessionStorage,
    }

)))

