import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstErrorComponent } from './rst-error.component';

describe('RstErrorComponent', () => {
  let component: RstErrorComponent;
  let fixture: ComponentFixture<RstErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
