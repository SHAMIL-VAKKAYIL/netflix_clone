import instagram from '../assets/instagram_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import youtube from '../assets/youtube_icon.png'



function Footer() {
    return (
        <div className=" max-w-[60%] m-auto mt-10 justify-center items-center ">
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-3'>
                    <img src={instagram} alt="" className='w-8' />
                    <img src={facebook} alt="" className='w-8' />
                    <img src={twitter} alt="" className='w-8' />
                    <img src={youtube} alt="" className='w-8' />
                </div>
                <div className='grid grid-cols-4  gap-5 mt-5 font-meium '>
                    <ul className='flex flex-col gap-2'>
                        <li>Audio Description</li>
                        <li>investor Relations</li>
                        <li>Legal Notices</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>Help center</li>
                        <li>Jobs</li>
                        <li>Cokkies Prefrence</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>Gift cards</li>
                        <li>Terms of use</li>
                        <li>Corprate information</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>Media center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                <p className='flex text-[#ffffff91]'>©1997-2024 Netflix, inc</p>
            </div>

        </div>
    )
}

export default Footer
