"use strict";

const users = require("./users");
const security = require("../common/security");

module.exports = function (router) {
  // Group updated spintax places by dateUpdate desc - convert to spintax.dateUpdate
  router.route("/users/getuserinfo").get(users.getUserInfo);
  router.route("/users/register").post(users.register);
  router.route("/users/authenticate").post(users.authenticate);
  router.route("/users/getOnlineUsers").get(users.getOnlineUsers);
  router.route("/users/logout").get(users.logout);
};
