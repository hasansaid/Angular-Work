import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstTablesComponent } from './rst-tables.component';

describe('RstTablesComponent', () => {
  let component: RstTablesComponent;
  let fixture: ComponentFixture<RstTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
