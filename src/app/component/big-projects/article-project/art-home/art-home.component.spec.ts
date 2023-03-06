import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtHomeComponent } from './art-home.component';

describe('ArtHomeComponent', () => {
  let component: ArtHomeComponent;
  let fixture: ComponentFixture<ArtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
