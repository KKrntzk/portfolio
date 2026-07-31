import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewCoderr } from './project-view-coderr';

describe('ProjectViewCoderr', () => {
  let component: ProjectViewCoderr;
  let fixture: ComponentFixture<ProjectViewCoderr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewCoderr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectViewCoderr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
