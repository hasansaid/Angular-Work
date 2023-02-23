import { Component, OnInit } from '@angular/core';
import {
  concat,
  empty,
  from,
  fromEvent,
  interval,
  merge,
  Observable,
  of,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, mapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-project',
  templateUrl: './rxjs-project.component.html',
  styleUrls: ['./rxjs-project.component.css'],
})
export class RxjsProjectComponent implements OnInit {
  content = 'RxJs Library operations have been done. Examine the codes.';
  one$;
  two$;

  constructor() {}

  ngOnInit(): void {
    // this.one();
    // this.two();
    // this.three();
    // this.four();
    // this.five();

    this.six();

    // this.seven();
    // this.eight();

    // this.nine();

    // this.ten();
    // this.eleven();
    // this.twelve();
    // this.thirteen();
    this.fourteen();
    this.fiveteen();
    this.sixteen();
    this.seventeen();
  }

  one() {
    // Observable: zaman içerisinde gelebilecek bir veri akışını veya kaynağını temsil eder.
    // Neredeyse her şeyden Observable oluşturabilirsiniz.
    // RxJs'te Observable lar genellikle olaylardan (butona veya sayfaya tıklama, arama kutusuna
    // değer yazma veya uygulama sayfasının değişmesi vb.) oluşturulur.

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
      next: (value) => {
        console.log(value);
      },
    };
    const subscription = observable$.subscribe(observer);
    // Kısa yolu..
    // observable$.subscribe((value) => console.log(value));

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000);
  }

  two() {
    // Observable a birden fazla subscribe olma.

    // Tip belirtilmelidir.
    const observable$ = new Observable<string>((subscriber) => {
      console.log('Observable run.');
      subscriber.next('Hasan');
      setTimeout(() => {
        subscriber.next('Mustafa');
      }, 1000);
      setTimeout(() => {
        subscriber.next('Hüseyin');
      }, 3000);
    });

    console.log('Subscription 1 started.');
    observable$.subscribe((value) => {
      console.log('Subscription 1: ' + value);
    });

    setTimeout(() => {
      console.log('Subscription 2 started.');
      observable$.subscribe((value) => {
        console.log('Subscription 2: ' + value);
      });
    }, 2000);
  }

  three() {
    // Next Complate ve Error Notification ları - Subscription Lifecycle

    // Next ile observable nin tuttuğu data scream e değer atayabiliriz. Value yi emit(yaymak) edebiliriz.
    // Complete; data scream'e değer girmeyi sonlandırır. Observavle'nin consructor'un içerisine.
    // Error'dan sonra herhangi bir data atanmaz. İçerisinde bir payload bulunur. Payload: İçerisinde bir data tutar. Hata mesajı datası tutulur.
    // Değer atamaları, .unsubscribe() - complete - error ile son bulur.
    // Teardown: Program işi bittikten sonra hafızayı terketmez,arkada çalışmaya devam eder. Bu çalışmayı sonlandırmak istiyorsak Teardown kullanacaz.

    // Observable execute sıralaması.
    const observavle$ = new Observable<string>((subscriber) => {
      console.log('Observervabla run..');
      subscriber.next('Can');
      setTimeout(() => {
        subscriber.next('Hüseyin');
        // subscriber.complete();
      }, 3000);
      setTimeout(() => {
        subscriber.error(new Error('Error ..'));
      }, 4000);

      return () => {
        console.log('Teardown');
      };
    });

    const observer = {
      next: (value) => console.log(value),
      error: (err) => console.log(err.message),
      complete: () => console.log('Completed'),
    };

    console.log('Before subscribing..');
    observavle$.subscribe(observer);
    console.log('After subscribing..');
  }

  four() {
    // Teardown kullanımına örnek..
    const interval$ = new Observable<number>((subscriber) => {
      let counter = 1;
      const intervalId = setInterval(() => {
        console.log(counter); // Teardown kullanmazsak yazdırmaya devam eder.
        subscriber.next(counter++);
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    });

    const subscription = interval$.subscribe((value) => console.log(value));

    setTimeout(() => {
      console.log('Finish');
      subscription.unsubscribe();
    }, 5000);
  }

  five() {
    // Cold Observable'da data bağımsız olarak kullanılır.

    const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

    ajax$.subscribe((data) => {
      console.log('Sub 1: ' + data.response.first_name);
    });
    ajax$.subscribe((data) => {
      console.log('Sub 2: ' + data.response.first_name);
    });
    ajax$.subscribe((data) => {
      console.log('Sub 3: ' + data.response.first_name);
    });
  }

  six() {
    // Hot Observable
    // İki subscribe da aynı gelecektir. Data bağımlı olarak çalışır.
    const helloButton = document.querySelector('button#six');
    const helloClick$ = new Observable<MouseEvent>((subscriber) => {
      helloButton.addEventListener('click', (event) => {
        subscriber.next(event as MouseEvent);
      });
    });

    helloClick$.subscribe((event) =>
      console.log('Sub 1:', event.type, event.x, event.y)
    );
    helloClick$.subscribe((event) =>
      console.log('Sub 2:', event.type, event.x, event.y)
    );
  }

  seven() {
    // Of Creation Fonksiyonu
    of('Hasan', 'Mustafa', 'Enes').subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
    });
  }

  eight() {
    // From Creation Fonksiyonu => Değerlerini diziden alır.
    const array = [10, 20, 30];
    const result = from(array);
    result.subscribe((value) => console.log(value));

    // resolve => kabul edilen callback fonksiyonunu tetikler. reject reddedilen callback fonksiyonunu tetikler.
    const somePromise = new Promise((resolve, reject) => {
      // resolve('Accepted');
      reject('Rejected');
    });

    const observableFromPromise$ = from(somePromise);
    observableFromPromise$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log('Error!!! ', err),
      complete: () => console.log('Completed'),
    });
  }

  nine() {
    // Uzun yol..
    const button = document.querySelector('button#nine');
    const click$ = new Observable<MouseEvent>((subscriber) => {
      const clickHandler = (event) => {
        subscriber.next(event as MouseEvent);
      };
      button.addEventListener('click', clickHandler);

      // Memory link'i durdurmak için..
      return () => {
        button.removeEventListener('click', clickHandler);
      };
    });

    const subscription = click$.subscribe((event) =>
      console.log('Sub 1:', event.type, event.x, event.y)
    );

    setTimeout(() => {
      console.log('Unsubscribe!!!');
      subscription.unsubscribe();
    }, 5000);

    // Kısa yol: fromEvent() Creation Fonksiyon
    const button2 = document.querySelector('button#nine-2');
    const subscription2 = fromEvent<MouseEvent>(button2, 'click').subscribe(
      (event) => console.log(event.type, event.x, event.y)
    );

    setTimeout(() => {
      console.log('Unsubscribe-2');
      subscription2.unsubscribe();
    }, 3000);
  }

  ten() {
    // timer Creation Fonksiyon : Belli bir süre sonra observable a girmeyi sağlar.
    console.log('Start');
    const subscription = timer(2000).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
    });

    setTimeout(() => {
      console.log('Unsubscribe!!');
      subscription.unsubscribe();
    }, 3000);
  }

  eleven() {
    // Interval Creation Fonksiyon => setInterval metoduna benzer.
    const subscription = interval(2000).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
    });

    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribe');
    }, 7000);
  }

  // Combination Operators - Birleştirme Operatörleri

  twelve() {
    // Concat
    concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe((value) => {
      // console.log(value);
      // this.one$ = value;
    });

    // Interval duramayacağı için of operatörü ile birleşemez.
    // concat(interval(1000),of("July","May","June")).subscribe(console.log);

    concat(of('WELLCOME', 'MY', 'WEBSITE')).subscribe((value) => {
      // this.two$ = value;
    });

    const userMessage = document.querySelector('.message');
    const deylaedMessage = (message, delayedTime = 1000) => {
      return empty().pipe(startWith(message), delay(delayedTime));
    };

    concat(
      deylaedMessage('3'),
      deylaedMessage('2'),
      deylaedMessage('1'),
      deylaedMessage('WELLCOME'),
      deylaedMessage('TO'),
      deylaedMessage('MY WEBSITE'),
      deylaedMessage(' ', 1000)
    ).subscribe((message: any) => {
      userMessage.innerHTML = message;
    });
  }

  thirteen() {
    // Merge
    const first = interval(1000);
    const second = interval(1000);
    const third = interval(1000);
    const fourth = interval(1000);

    const example = merge(
      first.pipe(mapTo('First')),
      second.pipe(mapTo('Second')),
      third.pipe(mapTo('Third')),
      fourth.pipe(mapTo('Fourth'))
    );

    example.subscribe((value) => {
      // console.log(value);
    });
  }

  fourteen() {}

  fiveteen() {}

  sixteen() {}

  seventeen() {}
}
