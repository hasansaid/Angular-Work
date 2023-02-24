import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImageProjectComponent } from './random-image-project.component';

describe('RandomImageProjectComponent', () => {
  let component: RandomImageProjectComponent;
  let fixture: ComponentFixture<RandomImageProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomImageProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomImageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
