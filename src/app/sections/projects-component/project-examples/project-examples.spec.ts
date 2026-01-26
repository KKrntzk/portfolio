import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExamples } from './project-examples';

describe('ProjectExamples', () => {
  let component: ProjectExamples;
  let fixture: ComponentFixture<ProjectExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectExamples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
