import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowProjectComponent } from './stackoverflow-project.component';

describe('StackoverflowProjectComponent', () => {
  let component: StackoverflowProjectComponent;
  let fixture: ComponentFixture<StackoverflowProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackoverflowProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackoverflowProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
