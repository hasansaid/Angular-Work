import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstListsItemComponent } from './rst-lists-item.component';

describe('RstListsItemComponent', () => {
  let component: RstListsItemComponent;
  let fixture: ComponentFixture<RstListsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstListsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstListsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
