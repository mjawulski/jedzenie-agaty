import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingTimesListComponent } from './feeding-times-list.component';

describe('FeedingTimesListComponent', () => {
  let component: FeedingTimesListComponent;
  let fixture: ComponentFixture<FeedingTimesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingTimesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingTimesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
