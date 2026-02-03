import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviAbout } from './navi-about';

describe('NaviAbout', () => {
  let component: NaviAbout;
  let fixture: ComponentFixture<NaviAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
