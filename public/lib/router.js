class Router {
  constructor() {}
}

Router.prototype.gotoRoute = () => {};

const anchorSelection = document.getElementsByClassName("anchor_click");
for (var i = 0; i < anchorSelection.length; i++) {
  (function (index) {
    anchorSelection[index].addEventListener("click", function (e) {
      const key = e.target.href.split("#/")[1];
      switch (key) {
        case "dashboard":
          document.getElementsByClassName("dashboard")[0].className =
            "dashboard";
            document.getElementsByClassName("Auth")[0].className = "Auth hide";
            Dashboard.prototype.init();
          break;
        case "authenticate":
          document.getElementsByClassName("Auth")[0].className = "Auth show";
          document.getElementsByClassName("dashboard")[0].className =
            "dashboard hide";
          break;
        case "logout":
          localStorage.removeItem("token");
          e.target.href = "#/authenticate";
          e.target.innerText = "Authenticate";
          document.getElementById("form_label").innerText = "Login";
          document.getElementById("user_anchor").parentNode.className =
            "NavigationItem hide";

          document.getElementsByClassName("Auth")[0].className = "Auth show";
          break;
      }
    });
  })(i);
}

// document.getElementsByClassName("anchor_click")[0].addEventListener("click", function (e) {
//   const key  = e.target.href.split('#/')[1];
//   switch (key) {
//     case 'dashboard':
//         document.getElementsByClassName('dashboard')[0].className = 'dashboard';
//         break;
//     case 'authenticate':
//         document.getElementsByClassName('Auth')[0].className = 'Auth show';
//         document.getElementsByClassName('dashboard')[0].className = 'dashboard hide';
//         break;
//     case 'logout':
//         localStorage.removeItem('token');
//         e.target.href = '#/authenticate';
//         e.target.innerText = 'Authenticate';
//         document.getElementById('form_label').innerText = 'Login';
//         document.getElementById('user_anchor').parentNode.className = 'NavigationItem hide';

//         document.getElementsByClassName('Auth')[0].className = 'Auth show';
//         break;
//   }

// });
