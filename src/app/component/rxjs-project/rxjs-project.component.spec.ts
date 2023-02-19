import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsProjectComponent } from './rxjs-project.component';

describe('RxjsProjectComponent', () => {
  let component: RxjsProjectComponent;
  let fixture: ComponentFixture<RxjsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
