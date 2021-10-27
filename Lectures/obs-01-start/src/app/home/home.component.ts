import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/Operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstCustomeObserer: Subscription;
  constructor() {}

  ngOnInit() {
    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        //emitting new data
        observer.next(count);
        //throwing complete
        if (count === 5) {
          observer.complete();
        }
        //throwing error
        if (count > 3) {
          observer.error(new Error("Error at 3"));
        }

        count++;
      }, 1000);
    });

    this.firstCustomeObserer = customObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round " + data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        //catching error
        (error) => {
          alert(error.message);
        },
        //catching complete
        () => {
          console.log("This emits when the observer is completed!");
        }
      );
  }

  ngOnDestroy() {
    this.firstCustomeObserer.unsubscribe();
  }
}
