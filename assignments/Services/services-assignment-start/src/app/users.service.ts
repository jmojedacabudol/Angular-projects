import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private counterService: CounterService) {
    // this.counterService.iterationCounter.subscribe((counter: number) => {
    //   alert(counter);
    // });
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    // this.counterService.iterationCounter.emit(this.counterService.counter++);
    this.counterService.countNumberOfIterations();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    // this.counterService.iterationCounter.emit(this.counterService.counter++);
    this.counterService.countNumberOfIterations();
  }
}
