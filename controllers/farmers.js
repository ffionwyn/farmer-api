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
  const limit = req.query.limit != null ? req.query.limit : 30;
  const start = req.query.start != null ? req.query.start : 0;
  const farmers = data.farmer.slice(start, limit)

  const farmersLeft = data.farmer.length - start 
  const hasMore = { "hasMore": farmersLeft > limit }

  farmers.push(hasMore)
  return res.json(farmers)
}

export function getAllFarmerInfo(req, res, next) {
  const id = req.params.id;
  const farmer = data.farmer.find(farmer => { return farmer.id == id });
  const farm = data.farm.find(farm => { return farm.id == farmer.farm_id });

  const farmerAndFarmTogether = [farmer,farm];
  return res.json(farmerAndFarmTogether)
}


