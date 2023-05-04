import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function postFarmers(req, res, next) {
  data['farmer'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log("error writing file:", err)
      return
    };
  });
  return res.json(data)
}

export function getFarmers(req, res, next) {
  return res.json(data.farmer)
}

export const getFarmerByName = (req, res) => {
  const name = req.params.name;
  const farmer = data.farmers.find(farmer => farmer.name === name);
  
  if (!farmer) {
    return res.json({ message: "farmer not found in system" });
  } else {
    return res.json(farmer);
  }
};


