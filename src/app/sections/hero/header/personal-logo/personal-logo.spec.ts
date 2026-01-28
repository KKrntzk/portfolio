import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLogo } from './personal-logo';

describe('PersonalLogo', () => {
  let component: PersonalLogo;
  let fixture: ComponentFixture<PersonalLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
