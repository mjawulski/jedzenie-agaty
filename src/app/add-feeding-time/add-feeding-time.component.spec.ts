import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedingTimeComponent } from './add-feeding-time.component';

describe('AddFeedingTimeComponent', () => {
  let component: AddFeedingTimeComponent;
  let fixture: ComponentFixture<AddFeedingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeedingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
