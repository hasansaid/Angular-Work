import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstPopupsComponent } from './rst-popups.component';

describe('RstPopupsComponent', () => {
  let component: RstPopupsComponent;
  let fixture: ComponentFixture<RstPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstPopupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
