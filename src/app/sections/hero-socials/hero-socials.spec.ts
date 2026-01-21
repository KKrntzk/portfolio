import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSocials } from './hero-socials';

describe('HeroSocials', () => {
  let component: HeroSocials;
  let fixture: ComponentFixture<HeroSocials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSocials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSocials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
