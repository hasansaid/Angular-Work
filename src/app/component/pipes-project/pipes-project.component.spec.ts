import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesProjectComponent } from './pipes-project.component';

describe('PipesProjectComponent', () => {
  let component: PipesProjectComponent;
  let fixture: ComponentFixture<PipesProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
