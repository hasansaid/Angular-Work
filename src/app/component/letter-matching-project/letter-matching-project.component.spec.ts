import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterMatchingProjectComponent } from './letter-matching-project.component';

describe('LetterMatchingProjectComponent', () => {
  let component: LetterMatchingProjectComponent;
  let fixture: ComponentFixture<LetterMatchingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterMatchingProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterMatchingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
