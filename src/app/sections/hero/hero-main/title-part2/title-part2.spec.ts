import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePart2 } from './title-part2';

describe('TitlePart2', () => {
  let component: TitlePart2;
  let fixture: ComponentFixture<TitlePart2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlePart2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePart2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
