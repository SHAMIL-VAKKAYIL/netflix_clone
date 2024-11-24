import cards_data from "../assets/cards/Cards_data";
import TitlecardComp from "./reusable/TitlecardComp";

interface ITitleCards{
  mtitle?:string,
  category?:string
}

function TitleCards({mtitle,category}:ITitleCards) {
  return (
    <div className="pl-5">

      <h1 className="text-xl mt-5 font-semibold">{mtitle}</h1>
      <div className="flex overflow-x-scroll popular gap-5 mt-5 ">
        {cards_data.map((item, index) => (
          <div key={index} className="">
            <TitlecardComp
              image={item.image}
              title={item.name}
            />
          </div>
        ))}
      </div>
    </div>

  );
}

export default TitleCards;
