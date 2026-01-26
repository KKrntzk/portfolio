import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { HeroHeader } from './sections/hero-header/hero-header';
import { AboutMeSection } from './sections/about-me-section/about-me-section';
import { SkillSet } from './sections/skill-set/skill-set';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, AboutMeSection, SkillSet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
