import { Component } from '@angular/core';
import { HeroHeader } from '../hero-header/hero-header';

@Component({
  selector: 'app-hero',
  imports: [HeroHeader],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
