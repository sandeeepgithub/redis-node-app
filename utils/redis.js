const { createClient } = require("redis");

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`,
});

redisClient.on("error", (err) => console.log(err));

(async () => {
  await redisClient.connect();

  await redisClient.set("hello", "world");
  console.log(redisClient.isReady ? "Redis connected" : "Redis error");
})();

module.exports = { redisClient };
