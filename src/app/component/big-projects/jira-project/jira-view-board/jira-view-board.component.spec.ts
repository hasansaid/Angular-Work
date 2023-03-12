import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraViewBoardComponent } from './jira-view-board.component';

describe('JiraViewBoardComponent', () => {
  let component: JiraViewBoardComponent;
  let fixture: ComponentFixture<JiraViewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraViewBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraViewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
