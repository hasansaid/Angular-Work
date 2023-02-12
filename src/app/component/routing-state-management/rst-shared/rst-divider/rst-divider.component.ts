import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rst-divider',
  templateUrl: './rst-divider.component.html',
  styleUrls: ['./rst-divider.component.css'],
})
export class RstDividerComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
