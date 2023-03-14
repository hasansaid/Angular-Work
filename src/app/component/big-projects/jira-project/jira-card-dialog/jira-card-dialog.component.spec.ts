import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraCardDialogComponent } from './jira-card-dialog.component';

describe('JiraCardDialogComponent', () => {
  let component: JiraCardDialogComponent;
  let fixture: ComponentFixture<JiraCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraCardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
