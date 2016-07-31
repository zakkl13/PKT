export class User {
  username: String;
  hashedPassword: String;
  email: String;

  constructor(username: string, email: String) {
    this.username = username;
    this.email = email;
  }

  set_pass(hashPass: String) {
    this.hashedPassword = hashPass;
  }
}