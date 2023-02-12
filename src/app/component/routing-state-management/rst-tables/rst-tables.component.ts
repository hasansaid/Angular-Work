import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-tables',
  templateUrl: './rst-tables.component.html',
  styleUrls: ['./rst-tables.component.css'],
})
export class RstTablesComponent implements OnInit {
  datas = [
    { name: 'Jhon', age: 23, job: 'Computer Engineer', employed: 'No' },
    { name: 'Jack', age: 42, job: 'Software Engineer', employed: 'No' },
    { name: 'Will', age: 38, job: 'Industrial Engineer', employed: 'Yes' },
  ];
  headers = [
    { key: 'name', label: 'Fullname' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Is he/she satisfied with his/her salary?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
