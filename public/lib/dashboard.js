class Dashboard {
  constructor() {}
}

Dashboard.prototype.init = async () => {
  let response = await fetch(`${config.service_url}/getOnlineUsers`);
  if (response.ok) {
    let users = await response.json();
    const users_element = document.getElementById("online_users");
    users_element.innerHTML = "";
    users.map((user) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href='#'>${user}</a>`;
      users_element.appendChild(li);
    });
  } else {
    alert("HTTP-Error: " + response.status);
  }

//   var check_online_users = setInterval(() => {
//     Dashboard.prototype.init()
//   }, 10000);
};


