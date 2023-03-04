import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sof-home',
  templateUrl: './sof-home.component.html',
  styleUrls: ['./sof-home.component.css'],
})
export class SofHomeComponent implements OnInit {
  constructor(public us: SofUserService) {}

  ngOnInit(): void {}
}
