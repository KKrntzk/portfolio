import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInformation } from './about-me-information';

describe('AboutMeInformation', () => {
  let component: AboutMeInformation;
  let fixture: ComponentFixture<AboutMeInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
