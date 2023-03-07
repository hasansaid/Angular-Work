import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraBoardsComponent } from './jira-boards.component';

describe('JiraBoardsComponent', () => {
  let component: JiraBoardsComponent;
  let fixture: ComponentFixture<JiraBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraBoardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
