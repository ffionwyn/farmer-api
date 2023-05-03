import request from "supertest";
import express from "express";
import routes from "./routes/farmers.js";
const app = express();

app.use(json());
app.use("/", routes);

describe("Test the farmer API", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
