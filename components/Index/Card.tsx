import Image from "next/image";
import House from "../../interfaces/house";
import Link  from "next/link";

type CardProps = {
  house: House;
}

const pictureLoader = ({src}) => {
  return src;
}

const Card = ({house}: CardProps) => (
  <div className={"overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200"}>
    <Image
      loader={pictureLoader}
      className={"aspect-video"}
      src={house.media}
      width="800"
      height="600"
    />
    <div className={"p-6"}>
      <header className={"mb-4"}>
        <h3 className={"text-xl font-medium text-slate-700"}>
          Location: {house.street_name}, {house.suburb}
        </h3>
        <p className={"text-slate-400"}>{house.price}&euro;</p>
      </header>
      <p>Type: {house.property_category}</p>
    </div>
    <div className={"flex justify-end p-6 pt-0"}>
      <Link href={`/houses/${house.listing_id}`}>
        <button className={"inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium" +
          " tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap" +
          " bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed" +
          " disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"}>
          <span>See Details</span>
        </button>
      </Link>
    </div>
  </div>
);

export default Card;