import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtHeaderComponent } from './art-header.component';

describe('ArtHeaderComponent', () => {
  let component: ArtHeaderComponent;
  let fixture: ComponentFixture<ArtHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
