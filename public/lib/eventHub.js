document.addEventListener("notify", function (e) {
  document.getElementById("message").textContent = e.detail;
  document.getElementById("message").style.display = "block";
  setTimeout(function () {
    document.getElementById("message").style.display = "none";
  }, 4000);
});

document.addEventListener("login", function (e) {
  if (e.detail) {
    document.getElementById("auth_anchor").href = "#/logout";
    document.getElementById("auth_anchor").innerText = "Logout";

    document.getElementById("user_anchor").parentNode.className =
      "NavigationItem";
    document.getElementById("user_anchor").innerText = `Hello ${e.detail.split('.')[0]}`;
    document.getElementsByClassName("Auth")[0].className = "Auth hide";
  }
});
