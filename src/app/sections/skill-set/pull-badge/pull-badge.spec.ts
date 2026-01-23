import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullBadge } from './pull-badge';

describe('PullBadge', () => {
  let component: PullBadge;
  let fixture: ComponentFixture<PullBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PullBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
