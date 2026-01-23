import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDescribtion } from './stack-describtion';

describe('StackDescribtion', () => {
  let component: StackDescribtion;
  let fixture: ComponentFixture<StackDescribtion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackDescribtion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackDescribtion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
