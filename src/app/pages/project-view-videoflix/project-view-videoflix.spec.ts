import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewVideoflix } from './project-view-videoflix';

describe('ProjectViewVideoflix', () => {
  let component: ProjectViewVideoflix;
  let fixture: ComponentFixture<ProjectViewVideoflix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewVideoflix],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectViewVideoflix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
