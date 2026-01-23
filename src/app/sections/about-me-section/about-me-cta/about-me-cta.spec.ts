import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeCta } from './about-me-cta';

describe('AboutMeCta', () => {
  let component: AboutMeCta;
  let fixture: ComponentFixture<AboutMeCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
