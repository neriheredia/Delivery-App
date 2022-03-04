import axios from 'axios'

export const urlBase = axios.create({
    baseURL: "https://delivery-app-piopv7v94-neriheredia.vercel.app/api/"
})