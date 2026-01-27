import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { HeroHeader } from './sections/hero-header/hero-header';
import { AboutMeSection } from './sections/about-me-section/about-me-section';
import { SkillSet } from './sections/skill-set/skill-set';
import { ProjectsComponent } from './sections/projects-component/projects-component';
import { PeerReviews } from './sections/peer-reviews/peer-reviews';
import { ContactComponent } from './sections/contact-component/contact-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    AboutMeSection,
    SkillSet,
    ProjectsComponent,
    PeerReviews,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
