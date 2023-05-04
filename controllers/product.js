import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getProduct(req, res, next) {
  return res.json(data.product)
}

export function postProduct(req, res, next) {
  data['product'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log("error writing file:", err)
      return
    };
  });
  return res.json(data)
}