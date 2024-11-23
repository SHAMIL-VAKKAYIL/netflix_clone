import cards_data from "../assets/cards/Cards_data";
import TitlecardComp from "./reusable/TitlecardComp";

function TitleCards() {
  return (
    <div className="px-5">

      <h1 className="text-xl mt-5">Popular shows</h1>
      <div className="flex overflow-x-scroll popular gap-5  h-[250px] mt-5 ">
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
