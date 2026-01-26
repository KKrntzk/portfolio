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
      desc: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
    {
      title: 'Join',
      img: '/img/projects/join.png',
      desc: 'Task manager inspired by the Kanban System. Create and organise tasks using drag and drop functions, assign users and categories.',
    },
  ];
}
