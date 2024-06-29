// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useSortCardsByPriceInc = () => {
    return useQuery({
        queryKey: ['sortCardsInc'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards?_sort=price`,
            }).then(
                response => response.data
            )
        }
    })
}