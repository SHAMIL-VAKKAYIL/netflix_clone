import { Link } from "react-router-dom"

interface ITitlecardComp {
    image: string,
    title: string,
    id: number
}

function TitlecardComp({ image, title, id }: ITitlecardComp) {
        
    return (
        <Link to={`player/${id}`}  >
            <div className="relative flex w-72 rounded hover:scale-105 transition-transform   ">
                <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" className=" rounded" />
                <p className="absolute right-3 bottom-3 font-medium ">{title}</p>
            </div>
        </Link>
    )
}

export default TitlecardComp
