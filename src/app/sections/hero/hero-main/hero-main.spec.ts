import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMain } from './hero-main';

describe('HeroMain', () => {
  let component: HeroMain;
  let fixture: ComponentFixture<HeroMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
