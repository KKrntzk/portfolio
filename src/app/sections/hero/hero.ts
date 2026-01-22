import { Component } from '@angular/core';
import { HeroHeader } from '../hero-header/hero-header';
import { HeroContent } from '../hero-content/hero-content';
import { HeroSocials } from '../hero-socials/hero-socials';

@Component({
  selector: 'app-hero',
  imports: [HeroHeader, HeroContent, HeroSocials],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
