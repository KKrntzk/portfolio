import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSwitch } from './lg-switch';

describe('LgSwitch', () => {
  let component: LgSwitch;
  let fixture: ComponentFixture<LgSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
