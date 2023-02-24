import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectAnswerProjectComponent } from './correct-answer-project.component';

describe('CorrectAnswerProjectComponent', () => {
  let component: CorrectAnswerProjectComponent;
  let fixture: ComponentFixture<CorrectAnswerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectAnswerProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectAnswerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
