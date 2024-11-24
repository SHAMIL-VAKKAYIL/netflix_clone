import { useEffect, useState } from 'react'
import back_arrow from '../assets/back_arrow_icon.png'
import { fetchMovieVideo } from '../service/mApi'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {

  interface Ivideo {
    name: string
    published_at: string
    key: string
    type: string
  }

  const { id } = useParams()
  const navigate =useNavigate()

  const [movieVideo, setmovieVideo] = useState<Ivideo>({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })



  useEffect(() => {
    const video = async () => {
      try {
        const data = await fetchMovieVideo(id)
        setmovieVideo(data.results[0])
        console.log(data.results[0]);


      } catch (error) {
        console.error('error on fetchin video', error)
      }
    }
    video()
  }, [])

  return (
    <div className='h-svh p-3'>
      <img src={back_arrow} alt="" className='w-12 ' onClick={()=>{navigate(-2)}} />
      <div className='h-full flex justify-center mt-5'>
        <iframe
          src={`https://www.youtube.com/embed/${movieVideo.key}`}
          title='trailer'
          width='90%' height='100%' allowFullScreen></iframe>
      </div>
      <div className='flex justify-between w-[95%] py-8 text-lg font-semibold '>
        <p>{movieVideo.published_at.split('').slice(0,10).join('')}</p>
        <p>{movieVideo.name}</p>
        <p>{movieVideo.type}</p>
      </div>
    </div>
  )
}

export default Player
