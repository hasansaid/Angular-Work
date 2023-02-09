import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-project',
  templateUrl: './directives-project.component.html',
  styleUrls: ['./directives-project.component.css'],
})
export class DirectivesProjectComponent implements OnInit {
  content: string = '';
  currentPage = 4;
  images = [
    {
      title: 'Car 1',
      imageUrl:
        'https://www.teahub.io/photos/full/269-2690469_black-lamborghini-car-model-aventador-2019-with-its.jpg',
    },
    {
      title: 'Car 2',
      imageUrl:
        'https://www.teahub.io/photos/full/314-3143874_black-car-corvette-c8-on-road.jpg',
    },
    {
      title: 'Car 3',
      imageUrl:
        'https://www.teahub.io/photos/full/170-1704837_white-car-nissan-silvia-s15-nissan-silvia-s15.jpg',
    },
    {
      title: 'Car 4',
      imageUrl:
        'https://images.wallpapersden.com/image/download/mclaren-600lt-spider-car_a2hsZWWUmZqaraWkpJRmZ2VlrWltZQ.jpg',
    },
    {
      title: 'Car 5',
      imageUrl:
        'https://images.wallpapersden.com/image/download/bmw-m550i-4k_bWptaGWUmZqaraWkpJRmZ2VlrWltZQ.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
