import fs from 'fs';

let data;
try {
  data = JSON.parse(fs.readFileSync('controllers/data.json'));
} catch (err) {
  console.error(err);
  process.exit(1);
}

export function getFarm(req, res, next) {
  try {
    return res.status(200).json(data.farm)
  } catch (error) {
    console.error("Error while processing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  };
}

export function postFarm(req, res, next) {
  data['farm'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error("Error writing file:", err)
      return res.status(500).json({ error: "Internal Server Error" })
    };
    return res.status(201).json(data)
  });
}