import { Component } from '@angular/core';
import { Buttons } from './buttons/buttons';
import { Description } from './description/description';
import { Title } from './title/title';

@Component({
  selector: 'app-project-view-elpolloloco',
  imports: [Buttons, Description, Title],
  templateUrl: './project-view-elpolloloco.html',
  styleUrl: './project-view-elpolloloco.scss',
})
export class ProjectViewElpolloloco {}
