import { TranslateService } from './../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit {
  contentEn: string =
    "With the ngFor directive, the component named card was printed to the screen as long as the entered data length. At the same time, data migration from one component to the other was performed. It was shown how to manipulate data with pipes. Don't forget to check the codes :)";

  contentTr: string =
    "ngFor direktifi ile card isimli bileşeni girilmiş olan veri uzunluğu kadar ekrana bastırıldı. Aynı zamanda bir bileşenden diğer bileşene veri geçişi gerçekleştirildi. Pipe'larla verinin nasıl manipüle edildiği gösterildi. Kodlara göz atmayı unutma :) ";
  isCard = true;
  name: string = '';
  date: string = '';
  total: number;
  size: number;
  person = [
    { name: 'Hasan', age: 23 },
    { name: 'Ali', age: 19 },
  ];

  eng: boolean;
  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}
  change() {
    this.isCard = !this.isCard;
  }
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
      titleTr: 'Dağ Bisikleti',
      contentTr: 'Hızlı sürerdim..',
    },
    {
      title: 'Climbing',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mack',
      content: 'I climbed well today too..',
      titleTr: 'Tırmanış',
      contentTr: 'Bugün de iyi tırmandım..',
    },
    {
      title: 'Hiking',
      imageUrl: 'assets/tree.jpeg',
      username: 'Jsophenos',
      content: "Let's take a little walk by the lake..",
      titleTr: 'Doğa Yürüyüşü',
      contentTr: 'Hadi biraz göl kenarında yürüyüş yapalım..',
    },
  ];
}
