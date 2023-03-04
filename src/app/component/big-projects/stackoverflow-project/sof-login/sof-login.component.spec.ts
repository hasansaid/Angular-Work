import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofLoginComponent } from './sof-login.component';

describe('SofLoginComponent', () => {
  let component: SofLoginComponent;
  let fixture: ComponentFixture<SofLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
