import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormProjectComponent } from './reactive-form-project.component';

describe('ReactiveFormProjectComponent', () => {
  let component: ReactiveFormProjectComponent;
  let fixture: ComponentFixture<ReactiveFormProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
