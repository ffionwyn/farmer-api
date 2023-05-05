import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('controllers/data.json')
);

export function postApplication(req, res, next) {
  try {
    data['application'].push(req.body);
    fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error("Error writing file:", err)
        return res.status(500).json({ error: "Internal Server Error" })
      };
      return res.status(201).json(data)
    });
  } catch (error) {
    console.error("Error while processing request:", error)
    return res.status(400).json({ error: "Bad Request" })
  }
}

export function getApplication(req, res, next) {
  try {
    return res.status(200).json(data.application);
  } catch (error) {
    console.error("Error while processing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getApplicationByID = (req, res) => {
  try {
  const id = req.params.id;
  const application = data.application.find(app => { return app.id == id });
    if (application == null) {
      console.log("Application not in system")
      return res.status(404).json({ error: "Application Not Found" });
    }
    else {
      return res.status(200).json(application);
    }
  }
    catch (error) {
    console.error("Error while processing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteApplication = (req, res) => {
  try {
    const id = req.params.id;
    const index = data.application.findIndex(app => app.id == id);
    if (index == -1) {
      console.log("Application not found in the system")
      return res.status(404).json({ error: "Application Not Found" });
    }
    data.application.splice(index, 1);
    fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.status(200).json(data);
    });
  } catch (error) {
    console.error("Error while processing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

 export const updateApplication = (req, res) => {
  try {
    const id = req.params.id;
    const applicationIndex = data.application.findIndex(app => app.id == id);
    if (applicationIndex == -1) {
      console.log("Application not found in the system")
      return res.status(404).json({ error: "Application Not Found" });
    }
    const updatedApplication = req.body;
    data.application[applicationIndex].amount_requested = updatedApplication.amount_requested;
    data.application[applicationIndex].farmer_id = updatedApplication.farmer_id;

    fs.writeFile('controllers/data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.status(200).json(data.application[applicationIndex]);
    });
  } catch (error) {
    console.error("Error while processing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
 };