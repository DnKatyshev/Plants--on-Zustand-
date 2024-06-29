// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useGetOneCard = (id) => {
    return useQuery({
        queryKey: ['oneCard'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards?id=${id}`,
            }).then(
                response => response.data
            )
        }
    })
}