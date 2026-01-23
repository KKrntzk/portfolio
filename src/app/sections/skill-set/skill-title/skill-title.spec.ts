import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTitle } from './skill-title';

describe('SkillTitle', () => {
  let component: SkillTitle;
  let fixture: ComponentFixture<SkillTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
