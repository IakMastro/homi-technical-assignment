import DUMMY_HOUSES from "../../../utils/sample-data";

export default function handler(req, res) {
  res.status(200).json(DUMMY_HOUSES);
}