import DUMMY_HOUSES from "../../../utils/sample-data";
import House        from "../../../interfaces/house";

export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json(DUMMY_HOUSES.find((house: House) => house.listing_id == id))
}