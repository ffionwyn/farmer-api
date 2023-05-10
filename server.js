import express, { json } from "express";
import farmerRoutes from "./routes/farmers.js";
import farmRoutes from "./routes/farm.js";
import applicationRoutes from "./routes/application.js";
import productRoutes from "./routes/product.js";

const app = express();

app.use(json());

app.use("/farmer", farmerRoutes);
app.use("/farm", farmRoutes);
app.use("/application", applicationRoutes);
app.use("/product", productRoutes);



const listener = app.listen(process.env.PORT || 6000, () => {
  console.log("App is listening on port " + listener.address().port);
});

