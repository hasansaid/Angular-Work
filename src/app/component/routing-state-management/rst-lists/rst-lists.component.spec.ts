import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstListsComponent } from './rst-lists.component';

describe('RstListsComponent', () => {
  let component: RstListsComponent;
  let fixture: ComponentFixture<RstListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
