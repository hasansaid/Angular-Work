import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import db from '@yusuf-yeniceri/easy-storage';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  data: any = {};
  eng: boolean = false;
  constructor(private http: HttpClient) {}
  aa() {
    let lang = db.ref('AngularProject/lang').get();
    this.eng = lang == 'tr' ? false : true;
    this.use(lang);
  }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/i18n.json`;

      this.http.get<{}>(langPath).subscribe(
        (translation) => {
          // console.log(translation);
          Object.keys(translation).forEach((key) => {
            translation[key] = translation[key][lang];
          });
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        (error) => {
          console.log(error);
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
