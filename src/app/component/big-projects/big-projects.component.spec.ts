import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProjectsComponent } from './big-projects.component';

describe('BigProjectsComponent', () => {
  let component: BigProjectsComponent;
  let fixture: ComponentFixture<BigProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
