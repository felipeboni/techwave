import data from "./data.json";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const product = data.filter((product) => product.asin === req.query.asin);
    res.status(200).json(product[0] || {});
  }
}
