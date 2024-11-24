import { Link } from "react-router-dom"

interface ITitlecardComp {
    image: string,
    title: string,
    id:number
}

function TitlecardComp({ image, title ,id}: ITitlecardComp) {

    return (
        <div className="relative flex w-72 rounded ">
            <Link to={`player/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" className=" rounded" />
                <p className="absolute right-3 bottom-3 font-medium ">{title}</p>
            </Link>
        </div>
    )
}

export default TitlecardComp
