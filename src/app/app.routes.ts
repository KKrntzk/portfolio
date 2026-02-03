import { Routes } from '@angular/router';
import { ProjectViewElpolloloco } from './sections/project-view-elpolloloco/project-view-elpolloloco';
import { ProjectViewJoin } from './sections/project-view-join/project-view-join';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project-view-elpolloloco', component: ProjectViewElpolloloco },
  { path: 'project-view-join', component: ProjectViewJoin },
];
