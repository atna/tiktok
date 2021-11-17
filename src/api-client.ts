import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com',
  headers: {
    'Content-type': 'application/json',
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
  }
})

export default apiClient
