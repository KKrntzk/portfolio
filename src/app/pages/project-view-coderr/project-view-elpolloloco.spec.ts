import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewElpolloloco } from './project-view-elpolloloco';

describe('ProjectViewElpolloloco', () => {
  let component: ProjectViewElpolloloco;
  let fixture: ComponentFixture<ProjectViewElpolloloco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewElpolloloco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectViewElpolloloco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
