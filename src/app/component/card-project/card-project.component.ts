import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit {
  contents: string = 'Data is passed between components and ngFor is used.';
  constructor() {}

  ngOnInit(): void {}

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
