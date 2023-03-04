import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofHeaderComponent } from './sof-header.component';

describe('SofHeaderComponent', () => {
  let component: SofHeaderComponent;
  let fixture: ComponentFixture<SofHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
