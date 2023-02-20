import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-project',
  templateUrl: './rxjs-project.component.html',
  styleUrls: ['./rxjs-project.component.css'],
})
export class RxjsProjectComponent implements OnInit {
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
      console.log('Observable çalıştı.');
      subscriber.next('Hasan');
      setTimeout(() => {
        subscriber.next('Mustafa');
      }, 1000);
      setTimeout(() => {
        subscriber.next('Hüseyin');
      }, 3000);
    });

    console.log('Subscription 1 başladı.');
    observable$.subscribe((value) => {
      console.log('Subscription 1: ' + value);
    });

    setTimeout(() => {
      console.log('Subscription 2 başladı.');
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
      console.log('Observervabla çalıştı..');
      subscriber.next('Can');
      setTimeout(() => {
        subscriber.next('Hüseyin');
        // subscriber.complete();
      }, 3000);
      setTimeout(() => {
        subscriber.error(new Error('Hata oluştu..'));
      }, 4000);

      return () => {
        console.log('Teardown');
      };
    });

    const observer = {
      next: (value) => console.log(value),
      error: (err) => console.log(err.message),
      complete: () => console.log('Tamamlandı'),
    };

    console.log('Subscribe olmadan önce..');
    observavle$.subscribe(observer);
    console.log('Subscribe olduktan sonra..');
  }

  four() {
    // Teardown kullanımına örnek..
    const interval$ = new Observable<number>((subscriber) => {
      let sayac = 1;
      const intervalId = setInterval(() => {
        console.log(sayac); // Teardown kullanmazsak yazdırmaya devam eder.
        subscriber.next(sayac++);
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    });

    const subscription = interval$.subscribe((value) => console.log(value));

    setTimeout(() => {
      console.log('Bitir');
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
  }
}
