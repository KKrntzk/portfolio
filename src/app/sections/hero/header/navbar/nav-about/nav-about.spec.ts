import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAbout } from './nav-about';

describe('NavAbout', () => {
  let component: NavAbout;
  let fixture: ComponentFixture<NavAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
