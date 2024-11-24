import axios from "axios"

const API_KEY=import.meta.env.VITE_API_KEY
const BASE_URL=import.meta.env.VITE_BASE_URL

const api =axios.create({
    baseURL:`${BASE_URL}`,
    params: {
        api_key: `${API_KEY}`, // Use the API Key as a query parameter
      },
      headers: {
        accept: 'application/json',
      },
})

export const fetchMovies=async(category: string | undefined)=>{
    const response =await api.get(`movie/${category}?language=en-US&page=1`,{
        params: {
            language: 'en-US',
            page: 1,
          },
    })
    return response.data
}

export const fetchMovieVideo=async(id: string | undefined)=>{
    const response=await api.get(`movie/${id}/videos?language=en-US`,{
        params:{
            language:'en-US',
            
        }
        
    })
    return response.data
}