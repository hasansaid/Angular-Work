import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWebsiteProjectComponent } from './blog-website-project.component';

describe('BlogWebsiteProjectComponent', () => {
  let component: BlogWebsiteProjectComponent;
  let fixture: ComponentFixture<BlogWebsiteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogWebsiteProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogWebsiteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
