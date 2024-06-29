// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useSortCardsByCountryThailand = () => {
    return useQuery({
        queryKey: ['sortCardsThailand'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards?made=Thailand`,
            }).then(
                response => response.data
            )
        }
    })
}