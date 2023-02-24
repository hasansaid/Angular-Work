import { AbstractControl } from '@angular/forms';

export class EqualityValidators {
  static addition(target: string, first: string, second: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[first];
      const secondNumber = form.value[second];

      //   const { firstNumber, secondNumber, answer } = form.value;
      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return { additon: true };
    };
  }
}
