import logo from '../assets/logo.png'
import search from '../assets/search_icon.svg'
import bell from '../assets/bell_icon.svg'
import profile from '../assets/profile_img.png'
import caret from '../assets/caret_icon.svg'



function Navbar() {
    return (
        <div className=" flex justify-between items-center px-7 mt-5 relative">
            {/* left comp */}
            <div className="flex gap-4 items-center" >
                <img src={logo} alt="" className='h-4 mr-4' />
                <p>Home</p>
                <p>TV Shows</p>
                <p>Movies</p>
                <p>New & Popular</p>
                <p>My List</p>
                <p>Browes by Language</p>
            </div>
            {/* right comp */}
            <div className="flex gap-4 items-center">
                <img src={search} alt="" />
                <p>children</p>
                <img src={bell} alt="" />
                <div className='group'>
                    <div className='flex gap-2'>
                        <img src={profile} alt="" />
                        <img src={caret} alt="" />
                    </div>
                    <p className='bg-gray-800 p-3 rounded-md underline underline-offset-2 absolute top-[100%] right-4 hidden group-hover:flex cursor-pointer'>Sign out of netflix</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
