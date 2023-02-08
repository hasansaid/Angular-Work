import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit {
  contents: string =
    'Data is passed between components and ngFor is used. And I gave a few examples of the use of pipes. You can review the codes.';
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
  posts = [
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Jhon',
      content: 'I drove too fast..',
    },
    {
      title: 'Climbing',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mack',
      content: 'I climbed well today too..',
    },
    {
      title: 'Hiking',
      imageUrl: 'assets/tree.jpeg',
      username: 'Jsophenos',
      content: "Let's run some Linden..",
    },
  ];
}
