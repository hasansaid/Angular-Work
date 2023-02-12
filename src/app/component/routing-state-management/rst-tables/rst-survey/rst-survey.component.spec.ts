import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstSurveyComponent } from './rst-survey.component';

describe('RstSurveyComponent', () => {
  let component: RstSurveyComponent;
  let fixture: ComponentFixture<RstSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
