// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useSortCardsByPriceDec = () => {
    return useQuery({
        queryKey: ['sortCardsDec'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards?_sort=-price`,
            }).then(
                response => response.data
            )
        }
    })
}