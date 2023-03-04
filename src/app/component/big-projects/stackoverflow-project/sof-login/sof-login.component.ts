import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sof-login',
  templateUrl: './sof-login.component.html',
  styleUrls: ['./sof-login.component.css'],
})
export class SofLoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
