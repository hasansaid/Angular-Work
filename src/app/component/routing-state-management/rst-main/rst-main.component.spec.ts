import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstMainComponent } from './rst-main.component';

describe('RstMainComponent', () => {
  let component: RstMainComponent;
  let fixture: ComponentFixture<RstMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
