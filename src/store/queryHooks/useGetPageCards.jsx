// React-Query
import { useQuery, useMutation } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../BASE_URL'

export const useGetPageCards = () => {
    return useQuery({
        queryKey: ['pageCards'],
        queryFn: () => {
            return axios({
                url: `${BASE_URL}/cards`,
            }).then(
                response => response.data
            )
        }
    })
}