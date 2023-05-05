import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getProduct(req, res, next) {
  try {
  if (!data.product || data.product.length === 0) {
      return res.status(404).json({ error: "No Products Found" });
  }
    return res.status(200).json(data.product);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export function postProduct(req, res, next) {
  try {
  data['product'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log("Error Writing File:", err)
      return res.status(500).json({ error: "Internal Server Error" });
    };
  });
  return res.status(201).json(data);
} catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Bad Request" });
  }
}