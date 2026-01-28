import { Component } from '@angular/core';
import { NavAbout } from './nav-about/nav-about';
import { NavContact } from './nav-contact/nav-contact';
import { NavProjects } from './nav-projects/nav-projects';
import { NavSkills } from './nav-skills/nav-skills';

@Component({
  selector: 'app-navbar',
  imports: [NavAbout, NavContact, NavProjects, NavSkills],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
