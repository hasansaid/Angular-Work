import { EqualityValidators } from './equality-validators';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css'],
})
export class EqualityComponent implements OnInit {
  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber: new FormControl(this.generateNumber()),
      answer: new FormControl(''),
    },
    // Custom Validator ekleme işlemi yapıyoruz.
    [EqualityValidators.addition('answer', 'firstNumber', 'secondNumber')]
  );

  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }
  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }

  constructor() {}

  ngOnInit(): void {}

  generateNumber() {
    return Math.ceil(Math.random() * 10);
  }
}
