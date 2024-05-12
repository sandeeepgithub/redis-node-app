const userRoutes = require("./routes/userRoutes");
const express = require("express");
const { redisClient } = require("./utils/redis");

const app = express();

app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/api/v1/test", async (req, res, next) => {
  const data = await redisClient.get("hello");

  res.send({
    data,
  });
});

app.use("/api/v1/", userRoutes);

// if no routes found
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `No route found for ${req.originalUrl}`,
  });
});

module.exports = {
  app,
};

// docker run -d --name mongo-local -p 27017:27017 --mount type=volume,source=mongo-local,target=//data/db mongo

// docker run -d --name redis-local -p 6379:6379  redis
