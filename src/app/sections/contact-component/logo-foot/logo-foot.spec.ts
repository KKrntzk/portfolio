import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFoot } from './logo-foot';

describe('LogoFoot', () => {
  let component: LogoFoot;
  let fixture: ComponentFixture<LogoFoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoFoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoFoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
