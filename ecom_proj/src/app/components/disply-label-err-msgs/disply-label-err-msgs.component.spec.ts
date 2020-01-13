import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplyLabelErrMsgsComponent } from './disply-label-err-msgs.component';

describe('DisplyLabelErrMsgsComponent', () => {
  let component: DisplyLabelErrMsgsComponent;
  let fixture: ComponentFixture<DisplyLabelErrMsgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplyLabelErrMsgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplyLabelErrMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
