const AUTH_REGISTRATION = 1;
const AUTH_LOGIN = 2;
const service_url = "http://localhost:3000/api/users";

class Auth {
  constructor(auth_method) {
    this.auth_method = auth_method;
  }



  register(email, password, first_name, last_name) {
    const http = new XMLHttpRequest();

    const params = `email=${email}&password=${password}&first_name=${first_name}&last_name=${last_name}`;
    http.open("POST", `${service_url}/register` , true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {
      //Call a function when the state changes.
      if (http.readyState == 4 && http.status == 201) {
        const event = new CustomEvent("notify", { detail: http.responseText });
        document.dispatchEvent(event);
      }
    };
    http.send(params);
  }

  login(email, password) {
    const http = new XMLHttpRequest();
    const params = `email=${email}&password=${password}&first_name=${first_name}&last_name=${last_name}`;
  
    http.open("POST", `${service_url}/authenticate` , true);
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {
      //Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        const token = JSON.parse(http.responseText).token;
        localStorage.setItem('token', token);
        const event = new CustomEvent("notify", { detail: 'user authenticated' });
        document.dispatchEvent(event);
        document.dispatchEvent(new CustomEvent("login", { detail: 200 }));
      }
    };
    http.send(params);
  }

  getOnlineUsers() {
    return ['eran@ddd.com','eran@ddd.com']
  }
}
