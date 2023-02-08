import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-project',
  templateUrl: './pipes-project.component.html',
  styleUrls: ['./pipes-project.component.css'],
})
export class PipesProjectComponent implements OnInit {
  content: string =
    'I gave a few examples of the use of pipes. You can review the codes.';
  name: string = '';
  date: string = '';
  total: number;
  size: number;
  person = [
    { name: 'Hasan', age: 23 },
    { name: 'Ali', age: 19 },
  ];
  constructor() {}

  ngOnInit(): void {}

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onTotalChange(value: number) {
    this.total = value;
  }

  onSizeChange(value: number) {
    this.size = value;
  }
}
