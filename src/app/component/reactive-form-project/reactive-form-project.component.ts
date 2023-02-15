import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-project',
  templateUrl: './reactive-form-project.component.html',
  styleUrls: ['./reactive-form-project.component.css'],
})
export class ReactiveFormProjectComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    // regex pattern
    expiration: new FormControl(null, [
      Validators.minLength(3),
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
