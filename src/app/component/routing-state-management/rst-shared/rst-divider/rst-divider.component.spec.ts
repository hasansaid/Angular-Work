import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstDividerComponent } from './rst-divider.component';

describe('RstDividerComponent', () => {
  let component: RstDividerComponent;
  let fixture: ComponentFixture<RstDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
