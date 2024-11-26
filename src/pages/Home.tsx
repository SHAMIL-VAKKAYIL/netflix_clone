import Navbar from "../components/Navbar"
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from "../components/TitleCards"
import Footer from "../components/Footer"

function Home() {
    return (

        <div className='relative'>
            <div className=" w-full h-full ">
                <Navbar />
            </div>
            {/* herosection */}
            <div className="relative ">
                <img src={hero_banner} alt="" className="w-full h-full   bannerimg " />
                <div className="absolute md:bottom-10 bottom-1 left-10">

                    <img src={hero_title} alt="" className="md:w-[30%] w-[20%] " />
                    <p className="max-w-[45%]  md:flex hidden mt-5 md:text-base text-xs">Discovering his ties to a secret ancient a young man living in modern istanbul wmbarks on a quest to save the city from am immortal enemy</p>
                    <p className=" max-w-[100%] md:hidden flex mt-5 md:text-base text-xs">Discovering his ties to a secret ancient a young man living in modern istanbul wmbarks on a quest </p>
                    <div className="flex gap-3 mt-5 mb-5">
                        <button className="bg-white text-black flex items-center md:px-5 px-2 rounded md:py-2 py-1 hover:bg-[#ffffffbf] gap-2"><img src={play_icon} alt="" className="md:w-5 w-3" />Play</button>
                        <button className="bg-[#303032b0] flex items-center md:px-5 px-2 rounded md:py-2 py-1 hover:bg-[#212122c9] gap-2" ><img src={info_icon} alt="" className="md:w-5 w-3" />More Info</button>
                    </div>

                </div>

            </div>
            <div className="">
                <TitleCards mtitle="Popular Movies" category="popular" />
                <TitleCards mtitle="Top Rated" category="top_rated" />
                <TitleCards mtitle="Latest" category="now_playing" />
                <TitleCards mtitle="Upcoming" category="upcoming" />
            </div>


            <Footer />
        </div>

    )
}

export default Home
