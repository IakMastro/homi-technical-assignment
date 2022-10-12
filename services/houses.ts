import House from "../interfaces/house";
import axios from "axios";

const url = "http://localhost:3000/api/houses";

const getHouses = async (): Promise<House[]> => {
  // const {data} = await axios.get(url);
  const {data} = await fetch('/api/houses');
  return data;
}

export {getHouses};