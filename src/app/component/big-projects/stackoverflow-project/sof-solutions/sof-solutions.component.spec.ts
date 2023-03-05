import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofSolutionsComponent } from './sof-solutions.component';

describe('SofSolutionsComponent', () => {
  let component: SofSolutionsComponent;
  let fixture: ComponentFixture<SofSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
