import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Title2 } from './title2';

describe('Title2', () => {
  let component: Title2;
  let fixture: ComponentFixture<Title2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Title2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Title2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
