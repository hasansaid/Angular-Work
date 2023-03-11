import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rst-lists-item',
  templateUrl: './rst-lists-item.component.html',
  styleUrls: ['./rst-lists-item.component.css'],
})
export class RstListsItemComponent implements OnInit {
  @Input() items = [];
  @Input() eng: boolean;
  constructor() {}

  ngOnInit(): void {}
}
