import { Routes } from '@angular/router';
import { ProjectViewElpolloloco } from './pages/project-view-elpolloloco/project-view-elpolloloco';
import { Home } from './pages/home/home';
import { ProjectViewJoin } from './pages/project-view-join/project-view-join';
import { ProjectViewCoderr } from './pages/project-view-coderr/project-view-coderr';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { LegalNotice } from './pages/legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project-view-elpolloloco', component: ProjectViewElpolloloco },
  { path: 'project-view-join', component: ProjectViewJoin },
  { path: 'project-view-coderr', component: ProjectViewCoderr },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'legal-notice', component: LegalNotice },
];
