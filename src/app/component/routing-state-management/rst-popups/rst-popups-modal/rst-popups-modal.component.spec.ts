import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstPopupsModalComponent } from './rst-popups-modal.component';

describe('RstPopupsModalComponent', () => {
  let component: RstPopupsModalComponent;
  let fixture: ComponentFixture<RstPopupsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstPopupsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstPopupsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
