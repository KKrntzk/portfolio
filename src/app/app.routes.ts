import { Routes } from '@angular/router';
import { ProjectViewElpolloloco } from './pages/project-view-elpolloloco/project-view-elpolloloco';
import { Home } from './pages/home/home';
import { ProjectViewJoin } from './pages/project-view-join/project-view-join';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project-view-elpolloloco', component: ProjectViewElpolloloco },
  { path: 'project-view-join', component: ProjectViewJoin },
];
