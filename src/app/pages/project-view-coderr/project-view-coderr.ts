import { Component } from '@angular/core';
import { Buttons } from './buttons/buttons';
import { Description } from './description/description';
import { Title } from './title/title';
import { Preview } from './preview/preview';
import { ArrowLeft } from './arrow-left/arrow-left';
import { ArrowRight } from './arrow-right/arrow-right';

@Component({
  selector: 'app-project-view-elpolloloco',
  imports: [Buttons, Description, Title, Preview, ArrowLeft, ArrowRight],
  templateUrl: './project-view-coderr.html',
  styleUrl: './project-view-coderr.scss',
})
export class ProjectViewCoderr {}
