import Layout               from '../components/Layout'
import Card                 from "../components/Index/Card";
import {GetServerSideProps} from "next";
import House                from "../interfaces/house";
import {getHouses}          from "../services/houses";

export const getServerSideProps: GetServerSideProps = async () => {
  const houses: House[] = await getHouses();
  return {props: {houses}}
}

type IndexPageProps = {
  houses: House[];
}

const IndexPage = ({houses}: IndexPageProps) => (
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

export default IndexPage
