import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstHomeComponent } from './rst-home.component';

describe('RstHomeComponent', () => {
  let component: RstHomeComponent;
  let fixture: ComponentFixture<RstHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
