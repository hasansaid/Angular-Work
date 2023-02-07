import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectComponent } from './card-project.component';

describe('CardProjectComponent', () => {
  let component: CardProjectComponent;
  let fixture: ComponentFixture<CardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
