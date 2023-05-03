import data from "./data.json" assert { type: 'json' };

export function getFarmers(req, res, next) {
  return res.json(data.farmer)
}

