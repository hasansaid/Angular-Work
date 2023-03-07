import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraHeaderComponent } from './jira-header.component';

describe('JiraHeaderComponent', () => {
  let component: JiraHeaderComponent;
  let fixture: ComponentFixture<JiraHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
