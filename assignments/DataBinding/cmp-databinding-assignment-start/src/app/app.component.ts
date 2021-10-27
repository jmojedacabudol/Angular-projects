import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIntervals(intervals: number) {
    if (intervals % 2 == 0) {
      this.evenNumbers.push(intervals);
    } else {
      this.oddNumbers.push(intervals);
    }
  }
}
