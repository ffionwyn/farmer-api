import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getProduct(req, res, next) {
  return res.json(data.product)
}