import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPolaroid } from './hero-polaroid';

describe('HeroPolaroid', () => {
  let component: HeroPolaroid;
  let fixture: ComponentFixture<HeroPolaroid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPolaroid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPolaroid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
