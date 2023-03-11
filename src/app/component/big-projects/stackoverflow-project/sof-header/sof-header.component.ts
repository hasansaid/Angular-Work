import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sof-header',
  templateUrl: './sof-header.component.html',
  styleUrls: ['./sof-header.component.css'],
})
export class SofHeaderComponent implements OnInit {
  @ViewChild('elementRef') elementRef: ElementRef<HTMLInputElement>;

  constructor(
    public userService: SofUserService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user != null) {
      this.userService.user = JSON.parse(user);
    }
    // guard ın görevini yapıyor.
    // else {
    //   this.router.navigateByUrl(
    //     '/big-projects/stackoverflow-project/sof-login'
    //   );
    // }
  }
  logout() {
    this.userService.user = undefined;
    this.matSnackBar.open('GOODBYE', 'OK');
    this.router.navigateByUrl('/big-projects/stackoverflow-project/sof-home');
    localStorage.clear();
  }
  leave() {
    this.userService.user = undefined;
    localStorage.clear();
  }

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
