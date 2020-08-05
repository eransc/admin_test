/*globals config*/
(function (Security) {
  "use strict";

  const atob = require("atob");

  function url_base64_decode(str) {
    var output = str.replace("-", "+").replace("_", "/");
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += "==";
        break;
      case 3:
        output += "=";
        break;
      default:
        throw "Illegal base64url string!";
    }
    return atob(output);
  }

  Security.validateToken = (token) => {
    if (token) {
      var encoded = token.split(".")[1];
      profile = JSON.parse(url_base64_decode(encoded));
      if (Date.now() >= profile.exp * 1000) {
        throw new Error('token not valid');
      }
    }
  }

  Security.getTokenInfo = (token) => {
    var profile = null;

    if (token) {
      var encoded = token.split(".")[1];
      profile = JSON.parse(url_base64_decode(encoded));
      console.log(profile);
      if (Date.now() >= profile.exp * 1000) {
        return false;
      }
    }

    return profile;
  };
})(exports);
