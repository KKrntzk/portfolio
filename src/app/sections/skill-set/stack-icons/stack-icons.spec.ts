import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackIcons } from './stack-icons';

describe('StackIcons', () => {
  let component: StackIcons;
  let fixture: ComponentFixture<StackIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
