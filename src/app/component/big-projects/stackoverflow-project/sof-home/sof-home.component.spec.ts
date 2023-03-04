import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofHomeComponent } from './sof-home.component';

describe('SofHomeComponent', () => {
  let component: SofHomeComponent;
  let fixture: ComponentFixture<SofHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
