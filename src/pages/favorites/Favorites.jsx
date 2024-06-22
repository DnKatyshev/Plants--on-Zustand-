// react-dependencies
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

// CONTEXT
import { Context } from "../../context/Context"

// project-component's imports
import { FavoritesItem } from "../../components/FavoritesItem/FavoritesItem"  // 1 item в избранном
import { cartData } from "../../context/cartData" // статичный массив объектов карточек

// project's styles/img
import './favorites.scss'


export const Favorites = () => {

    const {favoritesMain} = useContext(Context)

    let sum = 0
    for(let f in favoritesMain){
        sum+=favoritesMain[f]
    }

    const navigate = useNavigate()
    useEffect(() => {
        if(sum == 0){
            setTimeout(() => {
                navigate('/', {replace: false})
            }, 3500)
        }
    }, [sum])


    return (

        sum == 0
                    ?
        <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2, type: "spring"}}
        >
            <h2 className="cart-empty-title">
                You don't have any products in your Favorites! We are redirecting you to the main page...
            </h2>            
        </motion.main>
                    :
        <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2, type: "spring"}}
        >
            <section className="cart">
                <div className="container">
                    <div className="cart__body">

                        <h1 className="section-title">Избранное</h1>

                        <ul className="cart__list">
                            {
                                cartData.map((card) => {
                                    if (favoritesMain[card.id] !== 0){
                                        return <FavoritesItem data={card}/>
                                    }
                                })
                            }
                        </ul>

                    </div>
                </div>
            </section>
        </motion.main>
  )
}
