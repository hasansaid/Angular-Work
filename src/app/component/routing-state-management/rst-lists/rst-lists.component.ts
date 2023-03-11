import { TranslateService } from './../../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-lists',
  templateUrl: './rst-lists.component.html',
  styleUrls: ['./rst-lists.component.css'],
})
export class RstListsComponent implements OnInit {
  datas = [
    { value: 50, label: 'Customer', labelTr: 'Müşteri' },
    { value: 3500, label: 'Giro', labelTr: 'Ciro' },
    { value: 65, label: 'Comments', labelTr: 'Yorumlar' },
  ];

  images = [
    {
      imageUrl:
        'https://www.thefurnituremarket.co.uk/media/catalog/product/cache/0da5f36988333f78f594c0ac4d9002a6/a/d/ad74-cheshire-oak-kitchen-shaker-larder-cupboard-1_1.jpg',
      title: 'Cupboard',
      titleTr: 'Dolap',
      description: 'Made of wood',
      descriptionTr: 'Ağaçtan yapılmıştır.',
    },
    {
      imageUrl:
        'https://www.evshop.com.tr/image/cache/catalog/products_2022/24041035_5-500x500.jpg',
      title: 'Table',
      titleTr: 'Masa',
      description: 'Made of wood.',
      descriptionTr: 'Ağaçtan yapılmıştır.',
    },
  ];
  eng: boolean;
  constructor(private translateService: TranslateService) {
    this.eng = this.translateService.eng;
  }

  ngOnInit(): void {}
}
