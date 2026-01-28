import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProjects } from './nav-projects';

describe('NavProjects', () => {
  let component: NavProjects;
  let fixture: ComponentFixture<NavProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
