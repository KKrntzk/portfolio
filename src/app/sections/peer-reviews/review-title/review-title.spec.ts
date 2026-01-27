import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTitle } from './review-title';

describe('ReviewTitle', () => {
  let component: ReviewTitle;
  let fixture: ComponentFixture<ReviewTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
