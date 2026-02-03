import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { AboutMeSection } from '../../sections/about-me-section/about-me-section';
import { SkillSet } from '../../sections/skill-set/skill-set';
import { ProjectsComponent } from '../../sections/projects-component/projects-component';
import { PeerReviews } from '../../sections/peer-reviews/peer-reviews';
import { ContactComponent } from '../../sections/contact-component/contact-component';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMeSection, SkillSet, ProjectsComponent, PeerReviews, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
