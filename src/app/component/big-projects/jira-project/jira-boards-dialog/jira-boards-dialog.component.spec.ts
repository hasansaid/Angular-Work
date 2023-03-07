import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraBoardsDialogComponent } from './jira-boards-dialog.component';

describe('JiraBoardsDialogComponent', () => {
  let component: JiraBoardsDialogComponent;
  let fixture: ComponentFixture<JiraBoardsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraBoardsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraBoardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
