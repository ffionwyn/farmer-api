import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function postApplication(req, res, next) {
  data['application'].push(req.body);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log("Error writing file:", err)
      return
    };
  });
  return res.json(data)
}

export function getApplication(req, res, next) {
  return res.json(data.application)
}

export const getApplicationByID = (req, res) => {
  const id = req.params.id;
  const application = data.application.find(app => { return app.id == id });
  if (application == null) {
    console.log("application not in system")
    return
  }
  else return res.json(application);
};
    
export const deleteApplication = (req, res) => {
  const id = req.params.id;
  const index = data.application.findIndex(app => app.id == id);
  if (index == null) {
    console.log("application not in system");
  }
  data.application.splice(index, 1);
  fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log("error writing file:", err);
    }
    return res.json(data);
  });
};

