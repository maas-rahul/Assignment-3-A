import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdataComponent } from './reportdata.component';

describe('ReportdataComponent', () => {
  let component: ReportdataComponent;
  let fixture: ComponentFixture<ReportdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
