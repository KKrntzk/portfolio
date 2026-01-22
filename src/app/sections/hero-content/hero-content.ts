import { Component } from '@angular/core';
import { Badge } from './badge/badge';
import { Cta } from './cta/cta';
import { Title } from './title/title';
import { HeroProfile } from '../hero-profile/hero-profile';
import { Title2 } from './title2/title2';

@Component({
  selector: 'app-hero-content',
  imports: [Badge, Cta, Title, HeroProfile, Title2],
  templateUrl: './hero-content.html',
  styleUrl: './hero-content.scss',
})
export class HeroContent {}
