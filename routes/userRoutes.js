const express = require("express");
const {
  getUsers,
  updateUser,
  addUser,
} = require("../controllers/UserController");

const router = express.Router();

router.get("/user", getUsers);

router.put("/user/:id", updateUser);

router.post("/user", addUser);

module.exports = router;
