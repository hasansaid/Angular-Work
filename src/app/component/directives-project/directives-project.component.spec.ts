import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesProjectComponent } from './directives-project.component';

describe('DirectivesProjectComponent', () => {
  let component: DirectivesProjectComponent;
  let fixture: ComponentFixture<DirectivesProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
