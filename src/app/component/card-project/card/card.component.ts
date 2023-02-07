import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() username: string = '';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void {}
}
