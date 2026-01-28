import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSkills } from './nav-skills';

describe('NavSkills', () => {
  let component: NavSkills;
  let fixture: ComponentFixture<NavSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
