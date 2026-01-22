import { Component } from '@angular/core';
import { Skills } from './skills/skills';
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-navigation',
  imports: [Skills, AboutMe, Contact, Projects],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {}
