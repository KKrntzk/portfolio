import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewJoin } from './project-view-join';

describe('ProjectViewJoin', () => {
  let component: ProjectViewJoin;
  let fixture: ComponentFixture<ProjectViewJoin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewJoin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectViewJoin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
