import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviProjects } from './navi-projects';

describe('NaviProjects', () => {
  let component: NaviProjects;
  let fixture: ComponentFixture<NaviProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
