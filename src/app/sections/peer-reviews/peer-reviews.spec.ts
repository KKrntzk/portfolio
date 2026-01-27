import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerReviews } from './peer-reviews';

describe('PeerReviews', () => {
  let component: PeerReviews;
  let fixture: ComponentFixture<PeerReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeerReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeerReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
