import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviSkills } from './navi-skills';

describe('NaviSkills', () => {
  let component: NaviSkills;
  let fixture: ComponentFixture<NaviSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
