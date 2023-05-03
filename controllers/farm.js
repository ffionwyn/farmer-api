import data from "./data.json" assert { type: 'json' };

export function getFarm(req, res, next) {
  return res.json(data.farm)
}
