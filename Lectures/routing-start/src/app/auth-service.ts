export class AuthService {
  loggedin: boolean = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin);
      }, 1000);
    });

    return promise;
  }

  login() {
    this.loggedin = true;
  }

  logout() {
    this.loggedin = false;
  }
}
