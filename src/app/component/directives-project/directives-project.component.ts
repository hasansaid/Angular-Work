import { TranslateService } from './../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-project',
  templateUrl: './directives-project.component.html',
  styleUrls: ['./directives-project.component.css'],
})
export class DirectivesProjectComponent implements OnInit {
  content: string =
    "It's about using directives and creating new directives. Check out the codes!!!";
  contentTr: string =
    'Direktifleri kullanmak ve yeni direktifler oluşturmakla ilgilidir. Kodları inceleyin!!!';
  currentPage = 0;
  eng: boolean;
  images = [
    {
      title: 'Car 1',
      titleTr: 'Araba 1',
      imageUrl:
        'https://www.teahub.io/photos/full/269-2690469_black-lamborghini-car-model-aventador-2019-with-its.jpg',
    },
    {
      title: 'Car 2',
      titleTr: 'Araba 2',
      imageUrl:
        'https://www.teahub.io/photos/full/314-3143874_black-car-corvette-c8-on-road.jpg',
    },
    {
      title: 'Car 3',
      titleTr: 'Araba 3',
      imageUrl:
        'https://www.teahub.io/photos/full/170-1704837_white-car-nissan-silvia-s15-nissan-silvia-s15.jpg',
    },
    {
      title: 'Car 4',
      titleTr: 'Araba 4',
      imageUrl:
        'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
    },
    {
      title: 'Car 5',
      titleTr: 'Araba 5',
      imageUrl:
        'https://cdn.carsandcoffee.com.sg/web/bo/home-feature/jrkjodVGppgzo5s5EGBG/all-ferrari-sf90-cars-and-coffee-singapore_1440x1440.jpeg?alt=media&token=5b4e1232-9bbb-4f7c-9156-e1decc58e79a',
    },
    {
      title: 'Car 6',

      titleTr: 'Araba 6',
      imageUrl:
        'https://www.teahub.io/photos/full/269-2690469_black-lamborghini-car-model-aventador-2019-with-its.jpg',
    },
    {
      title: 'Car 7',

      titleTr: 'Araba 7',
      imageUrl:
        'https://www.teahub.io/photos/full/314-3143874_black-car-corvette-c8-on-road.jpg',
    },
    {
      title: 'Car 8',

      titleTr: 'Araba 8',
      imageUrl:
        'https://www.teahub.io/photos/full/170-1704837_white-car-nissan-silvia-s15-nissan-silvia-s15.jpg',
    },
    {
      title: 'Car 9',

      titleTr: 'Araba 9',
      imageUrl:
        'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
    },
    {
      title: 'Car 10',
      titleTr: 'Araba 10',
      imageUrl:
        'https://cdn.carsandcoffee.com.sg/web/bo/home-feature/jrkjodVGppgzo5s5EGBG/all-ferrari-sf90-cars-and-coffee-singapore_1440x1440.jpeg?alt=media&token=5b4e1232-9bbb-4f7c-9156-e1decc58e79a',
    },
    {
      title: 'Car 11',
      titleTr: 'Araba 11',
      imageUrl:
        'https://www.teahub.io/photos/full/269-2690469_black-lamborghini-car-model-aventador-2019-with-its.jpg',
    },
    {
      title: 'Car 12',
      titleTr: 'Araba 12',
      imageUrl:
        'https://www.teahub.io/photos/full/314-3143874_black-car-corvette-c8-on-road.jpg',
    },
    {
      title: 'Car 13',
      titleTr: 'Araba 13',
      imageUrl:
        'https://www.teahub.io/photos/full/170-1704837_white-car-nissan-silvia-s15-nissan-silvia-s15.jpg',
    },
    {
      title: 'Car 14',
      titleTr: 'Araba 14',
      imageUrl:
        'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
    },
    {
      title: 'Car 15',
      titleTr: 'Araba 15',
      imageUrl:
        'https://cdn.carsandcoffee.com.sg/web/bo/home-feature/jrkjodVGppgzo5s5EGBG/all-ferrari-sf90-cars-and-coffee-singapore_1440x1440.jpeg?alt=media&token=5b4e1232-9bbb-4f7c-9156-e1decc58e79a',
    },
    {
      title: 'Car 16',
      titleTr: 'Araba 16',
      imageUrl:
        'https://www.teahub.io/photos/full/269-2690469_black-lamborghini-car-model-aventador-2019-with-its.jpg',
    },
    {
      title: 'Car 17',
      titleTr: 'Araba 17',
      imageUrl:
        'https://www.teahub.io/photos/full/314-3143874_black-car-corvette-c8-on-road.jpg',
    },
    {
      title: 'Car 18',
      titleTr: 'Araba 18',
      imageUrl:
        'https://www.teahub.io/photos/full/170-1704837_white-car-nissan-silvia-s15-nissan-silvia-s15.jpg',
    },
    {
      title: 'Car 19',
      titleTr: 'Araba 19',
      imageUrl:
        'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
    },
    {
      title: 'Car 20',
      titleTr: 'Araba 20',
      imageUrl:
        'https://cdn.carsandcoffee.com.sg/web/bo/home-feature/jrkjodVGppgzo5s5EGBG/all-ferrari-sf90-cars-and-coffee-singapore_1440x1440.jpeg?alt=media&token=5b4e1232-9bbb-4f7c-9156-e1decc58e79a',
    },
  ];
  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}

  PageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 3;
  }

  changePage(i: number) {
    // Method kullanılarak da sayfa geçişi yapılabilir ancak html içerisinde sayfa geçişlerini yapmak daha kolaydır.
    this.currentPage = i;
  }
}
