const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const User = require("../models/User");

const verify = async (req, res, next) => {
  try {
    const access = req.headers["authorization"].split(" ")[1];
    jwt.verify(access, "secret admin", (err, decoded) => {
      if (decoded) {
        req.user = decoded.id;
        next();
      } else {
        res.status(401).json("unauthorized");
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//admin signin to the app
router.post("/signin", async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await Admin.findOne({ where: { login, password } });
    if (!admin) return res.status(404).json("wrong credentials");
    const token = jwt.sign({ id: admin.id }, "secret admin");
    res.status(200).json({ access: token });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all users
router.get("/users", verify, async (req, res) => {
  try {
    const user = await User.findAll();
    if (!user) return res.status(404).json("something went wrong");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user by cne
router.get("/users/:id", verify, async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { cne: id } });
    if (!user) return res.status(404).json("not found");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//modify the state of user
router.post("/users/:id", verify, async (req, res) => {
  try {
    const { state, reason } = req.body;
    const { id } = req.params;

    //update user on db using sequelise
    const user = await User.update(
      { stateOfDegree: state, reasonOfDegree: reason },
      { where: { cne: id } }
    );
    if (user[0] === 0) return res.status(404).json("wrong crendentials");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
