import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-project',
  templateUrl: './reactive-form-project.component.html',
  styleUrls: ['./reactive-form-project.component.css'],
})
export class ReactiveFormProjectComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}
}
