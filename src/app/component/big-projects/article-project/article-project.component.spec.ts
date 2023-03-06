import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleProjectComponent } from './article-project.component';

describe('ArticleProjectComponent', () => {
  let component: ArticleProjectComponent;
  let fixture: ComponentFixture<ArticleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
