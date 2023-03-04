import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sof-account',
  templateUrl: './sof-account.component.html',
  styleUrls: ['./sof-account.component.css'],
})
export class SofAccountComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: SofUserService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  accountForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.accountForm.controls;
  }

  createAccount() {
    if (this.accountForm.valid) {
      this.userService.createAccount(this.accountForm.value).subscribe();
      this.router.navigateByUrl(
        '/big-projects/stackoverflow-project/sof-login'
      );
      this.matSnackBar.open('Registration successful', 'X');
    } else
      this.matSnackBar.open('The form is incomplete, please fill it!', 'X');
  }
}
