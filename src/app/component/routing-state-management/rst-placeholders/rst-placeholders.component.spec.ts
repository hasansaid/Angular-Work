import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstPlaceholdersComponent } from './rst-placeholders.component';

describe('RstPlaceholdersComponent', () => {
  let component: RstPlaceholdersComponent;
  let fixture: ComponentFixture<RstPlaceholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstPlaceholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstPlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
