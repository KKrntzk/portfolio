import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContact } from './nav-contact';

describe('NavContact', () => {
  let component: NavContact;
  let fixture: ComponentFixture<NavContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
