import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { Logo } from './logo/logo';
import { LanguageSwitch } from './language-switch/language-switch';

@Component({
  selector: 'app-hero-header',
  imports: [Navigation, Logo, LanguageSwitch],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.scss',
})
export class HeroHeader {}
