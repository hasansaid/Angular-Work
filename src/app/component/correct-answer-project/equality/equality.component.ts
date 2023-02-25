import { startWith } from 'rxjs/operators';
import { EqualityValidators } from './equality-validators';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css'],
})
export class EqualityComponent implements OnInit {
  totalSeconds = 0;
  averageSeconds = 0;
  solved = 0;
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

  ngOnInit(): void {
    const startTime = new Date();

    // VALID veya INVALID değerlerini döndürür.
    // console.log( this.mathForm.statusChanges);

    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(1000)
      )
      .subscribe((value) => {
        this.solved++;
        this.totalSeconds = (new Date().getTime() - startTime.getTime()) / 1000;
        this.averageSeconds =
          (new Date().getTime() - startTime.getTime()) / this.solved / 1000;
        // setValue tüm değerleri güncellerken patchValue girilen değerleri update eder.
        this.mathForm.setValue({
          firstNumber: this.generateNumber(),
          secondNumber: this.generateNumber(),
          answer: '',
        });
      });
  }

  generateNumber() {
    return Math.ceil(Math.random() * 10);
  }
}
