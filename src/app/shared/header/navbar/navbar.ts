import { Component } from '@angular/core';
import { NaviAbout } from './navi-about/navi-about';
import { NaviContact } from './navi-contact/navi-contact';
import { NaviProjects } from './navi-projects/navi-projects';
import { NaviSkills } from './navi-skills/navi-skills';

@Component({
  selector: 'app-navbar',
  imports: [NaviAbout, NaviContact, NaviProjects, NaviSkills],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
