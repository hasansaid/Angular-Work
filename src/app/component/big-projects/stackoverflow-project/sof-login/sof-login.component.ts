import { Router } from '@angular/router';
import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sof-login',
  templateUrl: './sof-login.component.html',
  styleUrls: ['./sof-login.component.css'],
})
export class SofLoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: SofUserService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.userService.getUser(this.loginForm.value.email).subscribe((res) => {
      if (res.length == 0) {
        this.matSnackBar.open('No such account found!', 'Ok');
      } else {
        if (res[0].password === this.loginForm.value.password) {
          this.matSnackBar.open('WELLCOME SOF-PROJECT', 'OK');
          this.router.navigateByUrl(
            '/big-projects/stackoverflow-project/sof-home'
          );
          this.userService.user = res[0];
          localStorage.setItem('user', JSON.stringify(res[0]));
        } else {
          this.matSnackBar.open('Wrong password!', 'Ok');
          this.loginForm.patchValue({
            password: '',
          });
        }
      }
    });
  }
}
