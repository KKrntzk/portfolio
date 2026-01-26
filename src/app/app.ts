import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { HeroHeader } from './sections/hero-header/hero-header';
import { AboutMeSection } from './sections/about-me-section/about-me-section';
import { SkillSet } from './sections/skill-set/skill-set';
import { ProjectsComponent } from './sections/projects-component/projects-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, AboutMeSection, SkillSet, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
