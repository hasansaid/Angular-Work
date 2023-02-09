import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-project',
  templateUrl: './directives-project.component.html',
  styleUrls: ['./directives-project.component.css'],
})
export class DirectivesProjectComponent implements OnInit {
  content: string = '';
  currentPage = 0;
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
        'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
    },
    {
      title: 'Car 5',
      imageUrl:
        'https://cdn.carsandcoffee.com.sg/web/bo/home-feature/jrkjodVGppgzo5s5EGBG/all-ferrari-sf90-cars-and-coffee-singapore_1440x1440.jpeg?alt=media&token=5b4e1232-9bbb-4f7c-9156-e1decc58e79a',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  changePage(i: number) {
    // Method kullanılarak da sayfa geçişi yapılabilir ancak html içerisinde sayfa geçişlerini yapmak daha kolaydır.
    this.currentPage = i;
  }
}
