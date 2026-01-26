import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMain } from './projects-main';

describe('ProjectsMain', () => {
  let component: ProjectsMain;
  let fixture: ComponentFixture<ProjectsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
