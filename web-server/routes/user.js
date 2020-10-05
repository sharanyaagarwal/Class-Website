const express = require("express");
const router = express.Router();
const userHandler = require("../components/handler/user");

router.use((err, req, res, next) => {
  res.status(500).send("Something broke !");
});

router.post("/login", async (req, res) => {
  try {
    // Invoking Fn `userLogin` using handler(user)
    const response = await userHandler.userLogin(req.body);
    // Got `Success` response from Fn
    res.status(200).send({
      status: true,
      message: "Successful Login.",
      data: response,
    });
  } catch (err) {
    // Got `Error` response from Fn
    res.status(200).send({
      status: false,
      message: err,
    });
  }
});

router.post("/sign-up", async (req, res) => {
  try {
    // Invoking Fn `userSignUp` using handler(user)
    const response = await userHandler.userSignUp(req.body);
    // Got `Success` response from Fn
    res.status(200).send({
      status: true,
      message: "Sign Up successful",
    });
  } catch (err) {
    // Got `Error` response from Fn
    res.status(200).send({
      status: false,
      message: err,
    });
  }
});

router.get("*", (req, res) => {
  res.send("Page 404");
});

module.exports = router;
