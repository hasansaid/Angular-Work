import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf-input',
  templateUrl: './rf-input.component.html',
  styleUrls: ['./rf-input.component.css'],
})
export class RfInputComponent implements OnInit {
  @Input() control;
  @Input() label;
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
    // return this.control.dirty && this.control.touched && this.control.errors;
    // same
  }
}
