import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFilterComponent } from './manage-filter.component';

describe('ManageFilterComponent', () => {
  let component: ManageFilterComponent;
  let fixture: ComponentFixture<ManageFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
