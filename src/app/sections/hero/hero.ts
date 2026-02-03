import { Component } from '@angular/core';
import { HeroMain } from './hero-main/hero-main';

import { Socials } from './socials/socials';

@Component({
  selector: 'app-hero',
  imports: [HeroMain, Socials, HeroMain],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
