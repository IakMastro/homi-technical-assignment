import {useRouter} from "next/router";
import useSWR      from 'swr';
import Layout      from "../../components/Layout";
import House       from "../../interfaces/house";
import Image       from "next/image";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const pictureLoader = ({src}) => {
  return src;
}

const HousePage = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error} = useSWR(`/api/houses/${id}`, fetcher);

  if (error) {
    return (
      <Layout title={"House Not Found | Homi Demo"}>
        <h1>{error.log}</h1>
      </Layout>
    )
  }

  if (data) {
    const house: House = data;

    return (
      <Layout title={`${house.property_category} | Homi Demo`}>
        <section className={"m-2 p-2 divide-y rounded-lg divide-slate-200"}>
          <h5 className={"col-span-7 text-gray-900 text-xl font-medium mb-2"}>
            House Details
          </h5>

          <div className={"grid grid-cols-3 gap-4"}>
            <Image
              loader={pictureLoader}
              className={"aspect-video"}
              src={house.media}
              width="800"
              height="600"
            />

            <div className={"text-gray-900"}>
              <h1>Category: {house.property_category}</h1>
              <h1>Sub Category: {house.property_subcategory}</h1>
              <h1>Year renovated: {house.renovation_year}</h1>
            </div>

            <div className={"overflow-hidden max-h-52 max-w-[50%] bg-white rounded shadow-md text-slate-500" +
              " shadow-slate-200"}>
              <div className={"p-6"}>
                <header className={"mb-4 grid grid-cols-2 gap-2"}>
                  <div>
                    <h3 className={"text-xl font-medium text-slate-700"}>
                      Price:
                    </h3>
                    <h3 className={"text-xl font-medium text-slate-700"}>
                      Status:
                    </h3>
                  </div>
                  <div>
                    <h3 className={"text-xl"}>
                      {house.price}&euro;
                    </h3>
                    <h3 className={"text-xl"}>
                      Available
                    </h3>
                  </div>
                </header>
              </div>
              <div className={"flex p-6 pt-0"}>
                <button
                  className={"inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium" +
                    " tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap" +
                    " bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 disabled:cursor-not-allowed" +
                    " disabled:border-orange-300 disabled:bg-orange-300 disabled:shadow-none"}>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  return <h1>Hello!</h1>
};

export default HousePage;