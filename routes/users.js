const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  try {
    const access = req.headers["authorization"].split(" ")[1];
    jwt.verify(access, "secret key", (err, decoded) => {
      if (decoded) {
        req.user = decoded.cne;
        next();
      } else {
        res.status(401).json("unauthorized");
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//user signin to the app
router.post("/signin", async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login, password } });
    if (!user) return res.status(404).json("wrong credentials");
    const token = jwt.sign({ cne: user.cne }, "secret key");
    res.status(200).json({ access: token });
  } catch (err) {
    res.status(500).json(err);
  }
});

//user get his details
router.get("/current", verify, async (req, res) => {
  try {
    const cnem = req.user;
    const user = await User.findOne({ where: { cne: cnem } });
    if (!user) return res.status(404).json("wrong credentials");
    const { cne, fullname, reasonOfDegree, stateOfDegree } = user;
    res.status(200).json({ cne, fullname, reasonOfDegree, stateOfDegree });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
