import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewJobComponent } from './review-job.component';

describe('ReviewJobComponent', () => {
  let component: ReviewJobComponent;
  let fixture: ComponentFixture<ReviewJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
