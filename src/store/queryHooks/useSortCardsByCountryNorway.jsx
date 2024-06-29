// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useSortCardsByCountryNorway = () => {
    return useQuery({
        queryKey: ['sortCardsNorway'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards?made=Norway`,
            }).then(
                response => response.data
            )
        }
    })
}