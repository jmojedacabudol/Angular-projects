import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userPassword: string = "Carabao";
  detailedDisplayed: boolean = false;
  buttonClicks = [];
  counter: number = 0;

  displayDetails() {
    this.detailedDisplayed === false
      ? (this.detailedDisplayed = true)
      : (this.detailedDisplayed = false);
    this.buttonClicks.push(new Date());
    this.counter++;
  }

  getButtonClickCount(logitem) {
    return logitem>= 5 ? "blue" : "transparent";
  }
}
