import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstSurveyTwoComponent } from './rst-survey-two.component';

describe('RstSurveyTwoComponent', () => {
  let component: RstSurveyTwoComponent;
  let fixture: ComponentFixture<RstSurveyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstSurveyTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstSurveyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
