import data from "./data.json" assert { type: 'json' };

export function getProduct(req, res, next) {
  return res.json(data.product)
}