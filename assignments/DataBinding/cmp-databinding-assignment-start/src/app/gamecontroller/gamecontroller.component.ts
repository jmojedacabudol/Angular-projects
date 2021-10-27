import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-gamecontroller",
  templateUrl: "./gamecontroller.component.html",
  styleUrls: ["./gamecontroller.component.css"],
})
export class GamecontrollerComponent implements OnInit {
  @Output() intervals = new EventEmitter<number>();
  counter;
  lastNumber = 0;
  constructor() {}

  ngOnInit(): void {}

  startCounting() {
    this.counter = setInterval(() => {
      this.intervals.emit(this.lastNumber++);
    }, 1000);
  }

  stopCounting(){
    clearInterval(this.counter);
  }
}
