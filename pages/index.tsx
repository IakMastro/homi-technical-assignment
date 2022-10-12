import Layout      from '../components/Layout'
import Card        from "../components/Index/Card";
import House       from "../interfaces/house";
import useSWR      from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

type IndexPageProps = {
  houses: House[];
}

const IndexPage = ({houses}: IndexPageProps) => {
  const {data, error} = useSWR('/api/houses', fetcher);

  if (error) {
    return (
      <Layout title={"Houses Not Found | Homi Demo"}>
        <h1>{error.log}</h1>
      </Layout>
    )
  }

  if (data) {
    const houses: House[] = data;

    return (
      <Layout title="Home | Homi Demo">
        <div className={"m-3 p-4"}>
          <div className={"grid grid-cols-4 gap-5"}>
            {houses.map((house: House) => (
              <Card key={house.listing_id} house={house}/>
            ))}
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <h1>Hi</h1>
  )
}

export default IndexPage
