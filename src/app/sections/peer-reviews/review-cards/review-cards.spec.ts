import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCards } from './review-cards';

describe('ReviewCards', () => {
  let component: ReviewCards;
  let fixture: ComponentFixture<ReviewCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
