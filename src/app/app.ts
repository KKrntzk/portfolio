import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { HeroHeader } from './sections/hero-header/hero-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, HeroHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
