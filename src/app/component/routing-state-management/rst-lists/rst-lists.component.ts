import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-lists',
  templateUrl: './rst-lists.component.html',
  styleUrls: ['./rst-lists.component.css'],
})
export class RstListsComponent implements OnInit {
  datas = [
    { value: 50, label: 'Customer' },
    { value: 3500, label: 'Giro' },
    { value: 65, label: 'Comments' },
  ];

  images = [
    {
      imageUrl: 'http://img.bestpa.com.tr/cache/data/gribuyuk-500x500.png',
      title: 'Cupboard',
      description: 'Made of wood',
    },
    {
      imageUrl:
        'https://www.evshop.com.tr/image/cache/catalog/products_2022/24041035_5-500x500.jpg',
      title: 'Table',
      description: 'Made of wood',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
