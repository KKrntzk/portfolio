import { Component } from '@angular/core';
import { ProjectsMain } from './projects-main/projects-main';
import { ProjectExamples } from './project-examples/project-examples';

@Component({
  selector: 'app-projects-component',
  imports: [ProjectsMain, ProjectExamples],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {}
