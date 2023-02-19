import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-project',
  templateUrl: './rxjs-project.component.html',
  styleUrls: ['./rxjs-project.component.css'],
})
export class RxjsProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.one();
  }

  one() {
    // Observable a subscribe olma..

    // Observable olduğunu belirtmek için dolar işareti koydum. Zorunlu değildir.
    // İki şekilde subscribe olabilirim. Değişkene atayıp, değişkene atamadan.
    const observable$ = new Observable((subscriber) => {
      subscriber.next(1);
      setTimeout(() => {
        subscriber.next(2);
      }, 1000);
      setTimeout(() => {
        subscriber.next(3);
      }, 4000);
    });

    const observer = {
      next: (value) => console.log(value),
    };
    const subscription = observable$.subscribe(observer);
    // Kısa yolu..
    // observable$.subscribe((value) => console.log(value));

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000);
  }
}
