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
    public userService: SofUserService
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
    this.userService.createAccount(this.accountForm.value).subscribe();
  }
}
