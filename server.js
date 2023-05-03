import express, { json } from "express";
import routes from "./routes/farmers.js";

const app = express();

app.use(json());

app.use("/", routes);

const listener = app.listen(process.env.PORT || 6000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
