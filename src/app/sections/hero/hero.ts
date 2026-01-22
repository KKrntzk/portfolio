import { Component } from '@angular/core';
import { HeroHeader } from '../hero-header/hero-header';
import { HeroContent } from '../hero-content/hero-content';

@Component({
  selector: 'app-hero',
  imports: [HeroHeader, HeroContent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
