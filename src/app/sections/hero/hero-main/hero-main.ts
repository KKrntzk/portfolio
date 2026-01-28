import { Component } from '@angular/core';
import { Badge } from './badge/badge';
import { Cta } from './cta/cta';
import { Title } from './title/title';
import { TitlePart2 } from './title-part2/title-part2';
import { HeroPolaroid } from "./hero-polaroid/hero-polaroid";

@Component({
  selector: 'app-hero-main',
  imports: [Badge, Cta, Title, TitlePart2, HeroPolaroid],
  templateUrl: './hero-main.html',
  styleUrl: './hero-main.scss',
})
export class HeroMain {}
