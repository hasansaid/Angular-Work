import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-letter-matching-project',
  templateUrl: './letter-matching-project.component.html',
  styleUrls: ['./letter-matching-project.component.css'],
})
export class LetterMatchingProjectComponent implements OnInit {
  content: string =
    'A random text is generated. We need to write the same text to the input. If the entered text and the random text match, a congratulations message is displayed. Try and see!!!';
  randomText: string = lorem.sentence();
  enteredText: string = '';

  constructor() {}

  ngOnInit(): void {}

  getInputValue(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'success' : 'insuccess';
  }
}
