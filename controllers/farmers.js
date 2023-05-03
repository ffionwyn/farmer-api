import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getFarmers(req, res, next) {
  return res.json(data.farmer)
}

