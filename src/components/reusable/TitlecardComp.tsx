
interface ITitlecardComp{
    image:string,
    title:string
}

function TitlecardComp({image,title}:ITitlecardComp) {

    return (
        <div className="relative flex w-72 rounded ">
            <img src={image} alt="" className=" rounded" />
            <p className="absolute right-3 bottom-3">{title}</p>
        </div>
    )
}

export default TitlecardComp
