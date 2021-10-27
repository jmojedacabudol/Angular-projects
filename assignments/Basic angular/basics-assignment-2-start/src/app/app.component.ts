import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userName: String = "";

  userNameChecker(username: String) {
    return username === "" ? true : false;
  }

  resetUser() {
    this.userName = "";
  }
}
