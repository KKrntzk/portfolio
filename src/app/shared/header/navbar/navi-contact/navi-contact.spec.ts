import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviContact } from './navi-contact';

describe('NaviContact', () => {
  let component: NaviContact;
  let fixture: ComponentFixture<NaviContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
