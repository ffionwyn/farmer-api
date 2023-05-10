import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function postFarmers(req, res, next) {
  try {
    data['farmer'].push(req.body);
    fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.log("error writing file:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      };
    });
    return res.status(201).json(data);
  } catch (error) {
    console.log("error:", error);
    return res.status(400).json({ error: "Bad Request" });
  }
}

// localhost:6000/farmer (get all farmers)
// localhost:6000/farmer?limit=2
// localhost:6000/farmer?limit=2&start=1 - think this is a bug
export function getFarmers(req, res, next) {
  try {
    const limit = req.query.limit != null ? req.query.limit : 30;
    const start = req.query.start != null ? req.query.start : 0;
    const farmers = data.farmer.slice(start, limit)

    const farmersLeft = data.farmer.length - start
    const seeMore = { "seeMore": farmersLeft > limit };

    farmers.push(seeMore)
    return res.status(200).json(farmers);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export function getAllFarmerInfo(req, res, next) {
  try {
  const id = req.params.id;
  const farmer = data.farmer.find(farmer => { return farmer.id == id });
    if (!farmer) {
      return res.status(404).json({ error: "Farmer Not Found" });
    }
    const farm = data.farm.find(farm => { return farm.id == farmer.farm_id });
    if (!farm) {
      return res.status(404).json({ error: "Farm Not Found" });
    }
  const farmerAndFarmTogether = [farmer,farm];
  return res.status(200).json(farmerAndFarmTogether);
} catch (error) {
    console.log("error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}