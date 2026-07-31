import { Component } from '@angular/core';

import { ProjectCard } from '../project-card/project-card';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-examples',

  imports: [ProjectCard, CommonModule],

  templateUrl: './project-examples.html',

  styleUrl: './project-examples.scss',
})
export class ProjectExamples {
  projects = [
    {
      title: 'El Pollo Loco',
      img: '/img/projects/Pollo.png',
      desc: 'projects.projectDescriptions.polloLoco.desc',
      link: 'project-view-elpolloloco',
    },
    {
      title: 'Join',
      img: '/img/projects/join.png',
      desc: 'projects.projectDescriptions.join.desc',
      link: 'project-view-join',
    },
    {
      title: 'Coderr',
      img: '/img/projects/join.png',
      desc: 'projects.projectDescriptions.coderr.desc',
      link: 'project-view-join',
    },
    {
      title: 'Videoflix',
      img: '/img/projects/join.png',
      desc: 'projects.projectDescriptions.join.desc',
      link: 'project-view-join',
    },
  ];
}
