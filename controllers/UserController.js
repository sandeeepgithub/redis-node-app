const { redisClient } = require("../utils/redis");
const User = require("../models/User");
const catchAsyncError = require("../utils/catchAsyncError");

exports.getUsers = catchAsyncError(async (req, res, next) => {
  let users = await redisClient.get("users");

  if (users) {
    users = JSON.parse(users);

    return res.status(200).send({
      data: users,
    });
  }

  users = await User.find().sort({ _id: -1 });

  await redisClient.set("users", JSON.stringify(users), {
    EX: 3600,
  });

  res.status(200).send({
    data: users,
  });
});

exports.addUser = catchAsyncError(async (req, res, next) => {
  const { name, count } = req.body;

  const user = await User.create({ name, count });

  await redisClient.del("users");

  res.status(200).json({ data: user });
});

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  let user = await User.findById(id);

  if (!user) {
    return res.status(400).json({
      data: "No user found",
    });
  }

  const { name, count } = req.body;

  user = await User.findByIdAndUpdate(
    id,
    {
      name,
      count,
    },
    { new: true }
  );

  await redisClient.del("users");

  res.status(200).json({
    data: user,
  });
});
