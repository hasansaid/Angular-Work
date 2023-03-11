import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-translate',
  templateUrl: './google-translate.component.html',
  styleUrls: ['./google-translate.component.css'],
})
export class GoogleTranslateComponent implements OnInit {
  @ViewChild('elementRef') elementRef: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // var deneme = document.querySelector('#:0.targetLanguage');
    // deneme.innerHTML = '';

    var v = document.createElement('script');
    v.type = 'text/javascript';
    v.innerHTML =
      "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
    this.elementRef.nativeElement.appendChild(v);
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    this.elementRef.nativeElement.appendChild(s);
  }
}
