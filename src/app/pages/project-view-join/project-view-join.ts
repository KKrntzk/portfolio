import { Component } from '@angular/core';
import { Buttons } from './buttons/buttons';
import { Description } from './description/description';
import { Preview } from './preview/preview';
import { Title } from './title/title';
import { ArrowLeft } from './arrow-left/arrow-left';
import { ArrowRight } from './arrow-right/arrow-right';

@Component({
  selector: 'app-project-view-join',
  imports: [Buttons, Description, Preview, Title, ArrowLeft, ArrowRight],
  templateUrl: './project-view-join.html',
  styleUrl: './project-view-join.scss',
})
export class ProjectViewJoin {}
