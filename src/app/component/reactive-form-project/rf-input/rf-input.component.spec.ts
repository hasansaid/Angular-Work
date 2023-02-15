import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfInputComponent } from './rf-input.component';

describe('RfInputComponent', () => {
  let component: RfInputComponent;
  let fixture: ComponentFixture<RfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
