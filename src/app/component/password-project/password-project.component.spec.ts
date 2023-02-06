import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordProjectComponent } from './password-project.component';

describe('PasswordProjectComponent', () => {
  let component: PasswordProjectComponent;
  let fixture: ComponentFixture<PasswordProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
