// React-dependencies
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Fragment, lazy, useEffect, useState, useTransition } from 'react';
import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

// React-Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Pages
import { Main } from "./pages/main/Main";
import { More } from './pages/more/More';
import { Cards } from './pages/cards/Cards';
import { OneCard } from './pages/oneCard/OneCard';
import { Cart } from './pages/cart/Cart';
import { Favorites } from './pages/favorites/Favorites'

import { MainContext } from './context/Context';

// Components
import Layout from './components/Layout';


const App = () => {

    const queryClient = new QueryClient()

    // state-lifting for cards's filtering TRANSITION
    const [isTitlePending, startTitleTransition] = useTransition()




    const router = createBrowserRouter(
        createRoutesFromElements(

            <Route
                path="/"
                element={<Layout startTitleTransition={startTitleTransition} />}
            >

                <Route
                    index
                    element={<Main />}
                />

                <Route
                    path="catalog"
                    element={<Cards isTitlePending={isTitlePending} />}
                />
                <Route
                    path="more"
                    element={<More />}
                />
                <Route
                    path="one-card/:id"
                    element={<OneCard />}
                />

                <Route
                    path="favorites"
                    element={<Favorites />}
                />
                <Route
                    path="cart"
                    element={<Cart />}
                />

            </Route>


        )
    )


    return (

        <QueryClientProvider client={queryClient}>
            <AnimatePresence mode="wait">
                <MainContext>
                    <RouterProvider router={router} />
                </MainContext>
            </AnimatePresence>
        </QueryClientProvider>

    )
}

export default App; 
