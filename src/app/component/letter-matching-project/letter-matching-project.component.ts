import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-matching-project',
  templateUrl: './letter-matching-project.component.html',
  styleUrls: ['./letter-matching-project.component.css'],
})
export class LetterMatchingProjectComponent implements OnInit {
  content: string = '';
  constructor() {}

  ngOnInit(): void {}
}
