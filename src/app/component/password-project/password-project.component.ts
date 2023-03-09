import { TranslateService } from './../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-project',
  templateUrl: './password-project.component.html',
  styleUrls: ['./password-project.component.css'],
})
export class PasswordProjectComponent implements OnInit {
  contentEn: string = ' Generating password from random characters.';
  contentTr: string = ' Rastgele karakterlerden şifre oluşturma.';

  length: Number = 0;
  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  eng: boolean;

  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}

  modifyLength(value: string) {
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }
  modifyLetters() {
    // this.includeLetters = true yapıldığında hep true olarak kalır. Bizim amacımız sürekli değişebilirliğini sağlamak.
    this.includeLetters = !this.includeLetters;
  }
  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnoprstuvyzWXYZAKLM';
    const symbols = '!@#$%^&()*';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      // Math.random() : 0 ile 1 arasında rastgele sayı üretir.
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
