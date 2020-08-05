class AuthService {
  constructor() {
    this.users = [];
  }

  validate(username) {
    if (!username) {
      throw new Error("username cannot be empty");
    } else if (username.length < 3) {
      throw new Error("username too short");
    }
  }

  addUser(email) {
    this.validate(email);
    this.users.push(email);
  }
  removeUser(username) {
    this.validate(username);
    this.users.pop(username);
  }
  getOnlineUsers() {
    return this.users;
  }
}

const auth = new AuthService();

module.exports = auth;
