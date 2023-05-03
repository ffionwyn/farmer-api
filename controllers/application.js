import data from "./data.json" assert { type: 'json' };

export function getApplication(req, res, next) {
  return res.json(data.application)
}