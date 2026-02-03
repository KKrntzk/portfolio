import { Routes } from '@angular/router';
import { ProjectViewElpolloloco } from './sections/project-view-elpolloloco/project-view-elpolloloco';
import { ProjectViewJoin } from './sections/project-view-join/project-view-join';

export const routes: Routes = [
  { path: 'project-view-elpolloloco', component: ProjectViewElpolloloco },
  { path: 'project-view-join', component: ProjectViewJoin },
];
