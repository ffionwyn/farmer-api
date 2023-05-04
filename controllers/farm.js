import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getFarm(req, res, next) {
  return res.json(data.farm)
}

export function postFarm(req, res, next) {
  data['application'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log("Error writing file:", err)
      return
    };
  });
  return res.json(data)
}