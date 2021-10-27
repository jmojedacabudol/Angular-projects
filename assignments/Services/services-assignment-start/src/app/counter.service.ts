import { Injectable } from "@angular/core";


@Injectable()
export class CounterService {
  counter = 0;

  countNumberOfIterations() {
    this.counter++;
    alert(this.counter);
  }
}
