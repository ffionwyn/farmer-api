import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function getApplication(req, res, next) {
  return res.json(data.application)
}

export function postApplication(req, res, next) {
  data['application'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data), err => {
    if (err) {
      console.log("Error writing file:", err)
      return
    };
  });
  return res.json(data)
}
