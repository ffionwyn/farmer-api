const request = require("supertest");
const express = require("express");
const routes = require("./routes/farmers");
const app = express();

app.use(json());
app.use("/", routes);

describe("Test the farmer API", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
