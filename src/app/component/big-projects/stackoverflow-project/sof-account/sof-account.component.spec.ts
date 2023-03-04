import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofAccountComponent } from './sof-account.component';

describe('SofAccountComponent', () => {
  let component: SofAccountComponent;
  let fixture: ComponentFixture<SofAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
