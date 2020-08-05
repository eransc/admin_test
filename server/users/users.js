var jwt = require("jsonwebtoken");
const User = require("../models/User");
const security = require("../common/security");
const authService = require("../common/authService");

exports.getUserInfo = (req, res) => {
  const token = req.get("Authorization");
  try {
    const tokenInfo = security.getTokenInfo(token);
    res.send(tokenInfo);
  } catch (ex) {
    res.statusCode = 500;
    res.send("token not valid");
  }
};

exports.register = async (req, res) => {
  try {
    const newUser = new User({
      //username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("newUser", newUser);

    const user_found = await User.findOne({ username: newUser.email });
    if (user_found) {
      throw new Error("username already exists");
    }

    await newUser.save(newUser);
    res.statusCode = 201;
    res.send("User registered successfully");
  } catch (ex) {
    res.statusCode = 500;
    res.send(`Error occoured: ${ex}`);
  }
};

exports.logout = async (req, res) => {
  try {
    console.log("eran", req.query.username);
    await authService.removeUser(req.query.username);
    res.send("user remove successfully from list");
  } catch (ex) {
    res.statusCode = 500;
    res.send(`could not remove user from list ${ex}`);
  }
};

exports.getOnlineUsers = async (req, res) => {
  try {
    const users = await authService.getOnlineUsers();
    res.send(users);
  } catch (ex) {
    res.statusCode = 500;
    res.send(`Could not fetch online users ${ex}`);
  }
};

exports.authenticate = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const profile = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    };

    console.log("profile", profile);

    var token = jwt.sign(profile, process.env.secret, { expiresIn: "5m" });

    console.log(
      `Security.authenticate username=${user.email}, token=${token}`
    );

    authService.addUser(user.email);

    res.json({ token: token });
    res.end();
  } else {
    res.send(401, "Unauthorized User:");
    res.end();
  }
};
