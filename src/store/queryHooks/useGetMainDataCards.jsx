// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useGetMainDataCards = () => {
    return useQuery({
        queryKey: ['mainCards'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards?_limit=6`,
            }).then(
                response => response.data
            )
        }
    })
}
