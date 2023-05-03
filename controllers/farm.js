import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getFarm(req, res, next) {
  return res.json(data.farm)
}
